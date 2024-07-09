import os
from django.http import JsonResponse, HttpResponse
from .api.mongo_models import Student, Teacher, Inventory_Data
from django.shortcuts import render
from django.http import QueryDict
from rest_framework import generics
from .api.serializers import StudentSerializer, TeacherSerializer, InventoryDataSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
import json
from django.conf import settings

class StudentListView(APIView):

    def get(self, request):
        students_data = list(Student.collection.find())
        for student in students_data:
            student['_id'] = str(student['_id'])  # Convert ObjectId to string

            # Generate file URLs
            file_fields = ['medical_forms', 'student_id_card', 'admission_letter']
            for field in file_fields:
                file_path = student.get(field)
                if file_path:
                    student[field] = request.build_absolute_uri(os.path.join(settings.MEDIA_URL, file_path))
                else:
                    student[field] = None

        serializer = StudentSerializer(students_data, many=True)
        return Response({'students': serializer.data})

    def post(self, request, *args, **kwargs):
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

            if not isinstance(validated_data, list):
                validated_data = [validated_data]

            for student_data in validated_data:
                if 'medical_forms' in request.FILES:
                    medical_forms = request.FILES['medical_forms']
                    student_data['medical_forms'] = self.handle_file_upload(medical_forms, 'medical_forms/')
                if 'student_id_card' in request.FILES:
                    student_id_card = request.FILES['student_id_card']
                    student_data['student_id_card'] = self.handle_file_upload(student_id_card, 'student_id_cards/')
                if 'admission_letter' in request.FILES:
                    admission_letter = request.FILES['admission_letter']
                    student_data['admission_letter'] = self.handle_file_upload(admission_letter, 'admission_letters/')

            # Save or update the student data in the database
            Student.save_or_update_many(validated_data)
            return Response({"message": "Students data saved successfully"}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def handle_file_upload(self, file, directory):
        if not os.path.exists(os.path.join(settings.MEDIA_ROOT, directory)):
            os.makedirs(os.path.join(settings.MEDIA_ROOT, directory))
        
        file_path = os.path.join(directory, file.name)
        full_path = os.path.join(settings.MEDIA_ROOT, file_path)
        
        with open(full_path, 'wb') as f:
            for chunk in file.chunks():
                f.write(chunk)
        
        return file_path



class TeacherListView(APIView):
    def get(self, request):
        teachers_data = list(Teacher.collection.find())
        for teacher in teachers_data:
            teacher['_id'] = str(teacher['_id'])
        serializer = TeacherSerializer(teachers_data,  many=True)
        return Response({'teachers':serializer.data})
    

    def post(self, request):
        try:
            data = json.loads(request.body)
            teacher_id = Teacher.collection.insert_one(data).inserted_id
            return Response({"status": "success", "teacher_id": str(teacher_id)}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"status": "error", "message": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    

# Inventory API View class
class InventoryDataListView(APIView):
    def get(self, request):
        inventories_Data = list(Inventory_Data.collection.find())
        for inventory_Data in inventories_Data:
            inventory_Data['_id'] = str(inventory_Data['_id'])
        serializer = InventoryDataSerializer(inventories_Data, many=True)
        return Response({'inventoryData':serializer.data})



class FileUploadView(APIView):
    def post(self, request, *args, **kwargs):
        student_id = request.data.get('id')
        try:
            student = Student.objects.get(id=student_id)
        except Student.DoesNotExist:
            return Response({'error': 'Student not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = StudentSerializer(student, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)













# The below is to be editted.
def create_student(request):
    if request.method == 'POST':
        data = {
            "name": request.POST.get("first_name"),
            "id": request.POST.get("id"),
            "level": request.POST.get("level"),
            "program":request.POST.get("program"),
            "gender":request.POST.get("gender"),
            "email": request.POST.get("email"),
            "date_of_birth": request.POST.get("date_of_birth")
        }
        student = Student(**data)
        student_id = student.save()
        return JsonResponse({"student_id": str(student_id)})

def update_student(request, student_id):
    if request.method == 'POST':
        data = {
            "name": request.POST.get("first_name"),
            "id": request.POST.get("id"),
            "level": request.POST.get("level"),
            "program":request.POST.get("program"),
            "gender":request.POST.get("gender"),
            "email": request.POST.get("email"),
            "date_of_birth": request.POST.get("date_of_birth")
        }
        updated_count = Student.update(student_id, data)
        return JsonResponse({"updated_count": updated_count})


def delete_student(request, student_id):
    deleted_count = Student.delete(student_id)
    return JsonResponse({"deleted_count": deleted_count})
