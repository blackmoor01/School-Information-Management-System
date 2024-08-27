from django.urls import path
from .views import StudentListView, TeacherListView, InventoryDataListView, PaymentsDataListView, StudentDetailView
from . import views

urlpatterns = [
    path('students/', StudentListView.as_view(), name='student-list'),
    path('teachers/',TeacherListView.as_view(), name='teacher-list'),
    path('inventoryData/', InventoryDataListView.as_view(), name='inventoryData-list'),
    path('invoiceData/', PaymentsDataListView.as_view(), name='payments-invoice'),
    path('students/<str:id>/', StudentDetailView.as_view(), name='student-detail'),

    path('students/create/', views.create_student, name='create_student'),
    path('students/<str:student_id>/update/', views.update_student, name='update_student'),
    path('students/<str:student_id>/delete/', views.delete_student, name='delete_student'),
]
