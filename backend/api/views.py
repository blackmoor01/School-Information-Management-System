import os
from django.http import JsonResponse, HttpResponse
from .api.mongo_models import Student, Teacher, Inventory_Data, Payments_Data
from django.shortcuts import render
from django.http import QueryDict
from rest_framework import generics
from .api.serializers import (
    StudentSerializer,
    TeacherSerializer,
    InventoryDataSerializer,
    PaymentsDataSerializer,
)
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
import json
from django.conf import settings
from decimal import Decimal, InvalidOperation
from rest_framework.exceptions import APIException
from datetime import datetime, date
import logging


logger = logging.getLogger(__name__)


class StudentListView(APIView):

    @staticmethod
    def convert_to_decimal(value):
        if value is None:
            return None
        try:
            return Decimal(value)
        except (ValueError, InvalidOperation):
            return None

    @staticmethod
    def convert_to_date(value):
        if value is None:
            return None
        try:
            if isinstance(value, str):
                return datetime.strptime(value, "%Y-%m-%d").date()
            elif isinstance(value, (datetime, date)):
                return value
        except ValueError:
            return None

    def get(self, request):
        try:
            students_data = list(Student.collection.find())
            total_students = Student.collection.count_documents({})
            for student in students_data:
                student["_id"] = str(student["_id"])

                student["amount_due"] = self.convert_to_decimal(student.get("amount_due"))
                student["tuition_fee"] = self.convert_to_decimal(student.get("tuition_fee"))
                student["balance"] = self.convert_to_decimal(student.get("balance"))

                student["date_of_admission"] = self.convert_to_date(student.get("date_of_admission"))
                student["date_of_birth"] = self.convert_to_date(student.get("date_of_birth"))

                file_fields = ["medical_forms", "student_id_card", "admission_letter"]
                for field in file_fields:
                    file_path = student.get(field)
                    if file_path:
                        student[field] = request.build_absolute_uri(
                            os.path.join(settings.MEDIA_URL, file_path)
                        )
                    else:
                        student[field] = None

            serializer = StudentSerializer(students_data, many=True)
            return Response({"students": serializer.data})
        except Exception as e:
            logger.error(f"Failed to fetch students data: {str(e)}")
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        


    def post(self, request, *args, **kwargs):
        try:
            if isinstance(request.data, QueryDict):
                data = request.data.dict()
            else:
                data = request.data

            if isinstance(data, list):
                serializer = StudentSerializer(data=data, many=True)
            else:
                serializer = StudentSerializer(data=data)

            if serializer.is_valid():
                validated_data = serializer.validated_data
                logger.debug(f"Validated Data: {validated_data}")

                if not isinstance(validated_data, list):
                    validated_data = [validated_data]

                for student_data in validated_data:
                    if "medical_forms" in request.FILES:
                        medical_forms = request.FILES["medical_forms"]
                        student_data["medical_forms"] = self.handle_file_upload(
                            medical_forms, "medical_forms/"
                        )
                    if "student_id_card" in request.FILES:
                        student_id_card = request.FILES["student_id_card"]
                        student_data["student_id_card"] = self.handle_file_upload(
                            student_id_card, "student_id_cards/"
                        )
                    if "admission_letter" in request.FILES:
                        admission_letter = request.FILES["admission_letter"]
                        student_data["admission_letter"] = self.handle_file_upload(
                            admission_letter, "admission_letters/"
                        )

                    student_data["amount_due"] = (
                        str(student_data["amount_due"])
                        if student_data.get("amount_due") is not None
                        else None
                    )
                    student_data["tuition_fee"] = (
                        str(student_data["tuition_fee"])
                        if student_data.get("tuition_fee") is not None
                        else None
                    )
                    student_data["balance"] = (
                        str(student_data["balance"])
                        if student_data.get("balance") is not None
                        else None
                    )

                    student_data["date_of_admission"] = (
                        student_data["date_of_admission"].strftime("%Y-%m-%d")
                        if student_data.get("date_of_admission")
                        else None
                    )
                    student_data["date_of_birth"] = (
                        student_data["date_of_birth"].strftime("%Y-%m-%d")
                        if student_data.get("date_of_birth")
                        else None
                    )

                logger.debug(f"Data to be saved: {validated_data}")
                logger.info(f"Processing files: {request.FILES}")

                Student.save_or_update_many(validated_data)
                return Response(
                    {"message": "Students data saved successfully"},
                    status=status.HTTP_201_CREATED,
                )

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            logger.error(f"Failed to process student data: {str(e)}")
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def handle_file_upload(self, file, directory):
        try:
            if not os.path.exists(os.path.join(settings.MEDIA_ROOT, directory)):
                os.makedirs(os.path.join(settings.MEDIA_ROOT, directory))

            file_path = os.path.join(directory, file.name)
            full_path = os.path.join(settings.MEDIA_ROOT, file_path)

            with open(full_path, "wb") as f:
                for chunk in file.chunks():
                    f.write(chunk)

            return file_path

        except Exception as e:
            logger.error(f"Failed to upload {file.name}: {str(e)}")
            raise APIException(detail=f"Failed to upload {file.name}: {str(e)}")


class StudentDetailView(StudentListView):
    
    def put(self, request, *args, **kwargs,):
        try:

            student_id = kwargs.get('student_id')  # Assuming student_id is passed in the URL

            if isinstance(request.data, QueryDict):
                data = request.data.dict()
            else:
                data = request.data

               # Fetch the student data from the database
                student = Student.collection.find_one({"student_id": student_id})

            if not student:
                return Response({"error": "Student not found"}, status=status.HTTP_404_NOT_FOUND)

            serializer = StudentSerializer(data=data, partial=True)  # `partial=True` allows partial updates

            if serializer.is_valid():
                validated_data = serializer.validated_data

                if "medical_forms" in request.FILES:
                    medical_forms = request.FILES["medical_forms"]
                    validated_data["medical_forms"] = self.handle_file_upload(
                        medical_forms, "medical_forms/"
                    )
                if "student_id_card" in request.FILES:
                    student_id_card = request.FILES["student_id_card"]
                    validated_data["student_id_card"] = self.handle_file_upload(
                        student_id_card, "student_id_cards/"
                    )
                if "admission_letter" in request.FILES:
                    admission_letter = request.FILES["admission_letter"]
                    validated_data["admission_letter"] = self.handle_file_upload(
                        admission_letter, "admission_letters/"
                    )

                # Convert Decimal and Date fields back to strings
                validated_data["amount_due"] = (
                    str(validated_data.get("amount_due"))
                    if validated_data.get("amount_due") is not None
                    else None
                )
                validated_data["tuition_fee"] = (
                    str(validated_data.get("tuition_fee"))
                    if validated_data.get("tuition_fee") is not None
                    else None
                )
                validated_data["balance"] = (
                    str(validated_data.get("balance"))
                    if validated_data.get("balance") is not None
                    else None
                )

                validated_data["date_of_admission"] = (
                    validated_data.get("date_of_admission").strftime("%Y-%m-%d")
                    if validated_data.get("date_of_admission")
                    else None
                )
                validated_data["date_of_birth"] = (
                    validated_data.get("date_of_birth").strftime("%Y-%m-%d")
                    if validated_data.get("date_of_birth")
                    else None
                )

                  # Update the student data in the database
                Student.collection.update_one({"student_id": student_id}, {"$set": validated_data})

                return Response(
                    {"message": "Student data updated successfully"},
                    status=status.HTTP_200_OK,
                )

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            logger.error(f"Failed to update student data: {str(e)}")
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    

    def get(self, request, id):
        try:
            student = Student.collection.find_one({"id": str(id)})
            if not student:
                return Response({"error": "Student not found."}, status=status.HTTP_404_NOT_FOUND)

            student["_id"] = str(student["_id"])

            student["amount_due"] = self.convert_to_decimal(student.get("amount_due"))
            student["tuition_fee"] = self.convert_to_decimal(student.get("tuition_fee"))
            student["balance"] = self.convert_to_decimal(student.get("balance"))

            student["date_of_admission"] = self.convert_to_date(student.get("date_of_admission"))
            student["date_of_birth"] = self.convert_to_date(student.get("date_of_birth"))

            file_fields = ["medical_forms", "student_id_card", "admission_letter"]
            for field in file_fields:
                file_path = student.get(field)
                if file_path:
                    student[field] = request.build_absolute_uri(
                        os.path.join(settings.MEDIA_URL, file_path)
                    )
                else:
                    student[field] = None

            return Response(student)
        except Exception as e:
            logger.error(f"Failed to fetch student data for ID {id}: {str(e)}")
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    







class TeacherListView(APIView):
    def get(self, request):
        teachers_data = list(Teacher.collection.find())
          # Calculate total number of teachers
        total_teachers = Teacher.collection.count_documents({})
        for teacher in teachers_data:
            teacher["_id"] = str(teacher["_id"])
        serializer = TeacherSerializer(teachers_data, many=True)
        return Response({"teachers": serializer.data})

    def post(self, request):
        try:
            data = json.loads(request.body)
            teacher_id = Teacher.collection.insert_one(data).inserted_id
            return Response(
                {"status": "success", "teacher_id": str(teacher_id)},
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return Response(
                {"status": "error", "message": str(e)},
                status=status.HTTP_400_BAD_REQUEST,
            )


# Payment API View Class
class PaymentsDataListView(APIView):
    def get(self, request):
        payments_data = list(Payments_Data.collection.find())
        for contents in payments_data:
            contents["_id"] = str(contents["_id"])
        serializer = PaymentsDataSerializer(payments_data, many=True)
        return Response({"paymentsdata": serializer.data})

    def post(self, request):
        try:
            data = json.loads(request.body)
            payments_id = Payments_Data.collection.insert_one(data).inserted_id
            return Response(
                {"status": "success", "payments_id": str(payments_id)},
                status=status.HTTP_201_CREATED,
            )
        except Exception as e:
            return Response(
                {"status": "error", "message": str(e)},
                status=status.HTTP_400_BAD_REQUEST,
            )


# Inventory API View class
class InventoryDataListView(APIView):
    def get(self, request):
        inventories_Data = list(Inventory_Data.collection.find())
        for inventory_Data in inventories_Data:
            inventory_Data["_id"] = str(inventory_Data["_id"])
        serializer = InventoryDataSerializer(inventories_Data, many=True)
        return Response({"inventoryData": serializer.data})


class FileUploadView(APIView):
    def post(self, request, *args, **kwargs):
        student_id = request.data.get("id")
        try:
            student = Student.objects.get(id=student_id)
        except Student.DoesNotExist:
            return Response(
                {"error": "Student not found"}, status=status.HTTP_404_NOT_FOUND
            )

        serializer = StudentSerializer(student, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# The below is to be editted.
def create_student(request):
    if request.method == "POST":
        data = {
            "name": request.POST.get("first_name"),
            "id": request.POST.get("id"),
            "level": request.POST.get("level"),
            "program": request.POST.get("program"),
            "gender": request.POST.get("gender"),
            "email": request.POST.get("email"),
            "date_of_birth": request.POST.get("date_of_birth"),
        }
        student = Student(**data)
        student_id = student.save()
        return JsonResponse({"student_id": str(student_id)})


def update_student(request, student_id):
    if request.method == "POST":
        data = {
            "name": request.POST.get("first_name"),
            "id": request.POST.get("id"),
            "level": request.POST.get("level"),
            "program": request.POST.get("program"),
            "gender": request.POST.get("gender"),
            "email": request.POST.get("email"),
            "date_of_birth": request.POST.get("date_of_birth"),
        }
        updated_count = Student.update(student_id, data)
        return JsonResponse({"updated_count": updated_count})


def delete_student(request, student_id):
    deleted_count = Student.delete(student_id)
    return JsonResponse({"deleted_count": deleted_count})
