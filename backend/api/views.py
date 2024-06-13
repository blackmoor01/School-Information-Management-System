# mongoapp/views.py

from django.http import JsonResponse
from .api.mongo_models import Student

def list_students(request):
    students = Student.get_all()
    return JsonResponse({'students': students}, safe=False)

def create_student(request):
    if request.method == 'POST':
        data = {
            "first_name": request.POST.get("first_name"),
            "last_name": request.POST.get("last_name"),
            "email": request.POST.get("email"),
            "date_of_birth": request.POST.get("date_of_birth")
        }
        student = Student(**data)
        student_id = student.save()
        return JsonResponse({"student_id": str(student_id)})

def update_student(request, student_id):
    if request.method == 'POST':
        data = {
            "first_name": request.POST.get("first_name"),
            "last_name": request.POST.get("last_name"),
            "email": request.POST.get("email"),
            "date_of_birth": request.POST.get("date_of_birth")
        }
        updated_count = Student.update(student_id, data)
        return JsonResponse({"updated_count": updated_count})

def delete_student(request, student_id):
    deleted_count = Student.delete(student_id)
    return JsonResponse({"deleted_count": deleted_count})
