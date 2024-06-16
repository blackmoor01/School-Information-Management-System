from django.urls import path
from .views import StudentListView, TeacherListView
from . import views

urlpatterns = [
    path('students/', StudentListView.as_view(), name='student-list'),
    path('teachers/',TeacherListView.as_view(), name='teacher-list'),
    path('students/create/', views.create_student, name='create_student'),
    path('students/<str:student_id>/update/', views.update_student, name='update_student'),
    path('students/<str:student_id>/delete/', views.delete_student, name='delete_student'),
]
