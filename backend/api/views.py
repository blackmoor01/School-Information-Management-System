from django.http import JsonResponse, HttpResponse
from .api.mongo_models import Student, Teacher
from django.shortcuts import render
from rest_framework import generics
from .api.serializers import StudentSerializer, TeacherSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
import json


class StudentListView(APIView):
    def get(self, request):
        students_data = list(Student.collection.find())
        for student in students_data:
            student['_id'] = str(student['_id'])  # Convert ObjectId to string
        serializer = StudentSerializer(students_data, many=True)
        return Response({'students': serializer.data})

    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            Student.save_or_update_many([serializer.validated_data])
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



#teachers_data = list(Teacher.collection.find())

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
    
    
    def add_teacher(request):
        if request.method == "POST":
            try:
                data = json.loads(request.body)
            
            except:
                pass














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
