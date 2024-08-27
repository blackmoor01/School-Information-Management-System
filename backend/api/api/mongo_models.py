import os
from .db_connection import db
from datetime import datetime
import pymongo
from .uploadhelper import save_file
import json
from bson.objectid import ObjectId
from decimal import Decimal, InvalidOperation
from django.core.exceptions import ValidationError
from django.core.validators import validate_email


class Student:
    collection = db["students"]

    @staticmethod
    def generate_student_id():
        current_year = datetime.now().year
        year_suffix = str(current_year)[
            -2:
        ]  # Get the last two digits of the current year

        latest_student = Student.collection.find_one(
            {"id": {"$regex": f"^{year_suffix}-"}}, sort=[("id", pymongo.DESCENDING)]
        )

        if latest_student:
            last_id = int(
                latest_student["id"][3:]
            )  # Extract the numerical part after the '-'
            new_id = last_id + 1
        else:
            new_id = 1

        student_id = f"{year_suffix}-{new_id:05d}"  # Format the new ID as YY-00000
        return student_id

    def __init__(self, **kwargs):
        self.name = kwargs.get("name", "")
        self.id = kwargs.get("id", "") or self.generate_student_id
        self.level = kwargs.get("level", None)
        self.program = kwargs.get("program", "")
        self.gender = kwargs.get("gender", "")
        self.contact = kwargs.get("contact", "")
        self.description = kwargs.get("description", "")
        self.date_of_admission = kwargs.get("date_of_admission", None)
        self.payment_status = kwargs.get("payment_status", "")
        self.date_of_birth = kwargs.get("date_of_birth", None)
        self.address = kwargs.get("address", "")
        self.email = kwargs.get("email", "")
        self.intake = kwargs.get("intake", "")
        self.official_receipt = kwargs.get("official_receipt", "")
        self.payment_method = kwargs.get("payment_method", "")
        self.date = kwargs.get("date", "")
        self.amount_due = Decimal(kwargs.get("amount_due", "0"))
        self.tuition_fee = Decimal(kwargs.get("tuition_fee", "0"))
        self.miscellaneous = kwargs.get("miscellaneous", "")
        self.balance = Decimal(kwargs.get("balance", "0"))
        self.remarks = kwargs.get("remarks", "")
        self.nationality = kwargs.get("nationality", "")
        self.government_id = kwargs.get("government_id", "")
        self.medical_forms = kwargs.get("medical_forms", None)
        self.student_id_card = kwargs.get("student_id_card", None)
        self.admission_letter = kwargs.get("admission_letter", None)
        self.imageUrl = kwargs.get("imageUrl", "")

    @classmethod
    def save_or_update_many(cls, students_data):
        for student in students_data:
            # Use the provided id or generate a new one if not provided
            student_id = student.get("id", cls.generate_student_id())

            # Check if the student already exists
            existing_student = cls.collection.find_one({"id": student["id"]})
            if existing_student:
                continue

            student_data = {
                "name": student.get("name", ""),
                "id": cls.generate_student_id(),
                "level": student.get("level", None),
                "program": student.get("program", ""),
                "gender": student.get("gender", ""),
                "contact": student.get("contact", ""),
                "description": student.get("description", ""),
                "date_of_admission": student.get("date_of_admission", ""),
                "payment_status": student.get("payment_status", ""),
                "date_of_birth": student.get("date_of_birth", ""),
                "address": student.get("address", ""),
                "email": student.get("email", ""),
                "intake": student.get("intake", ""),
                "official_receipt": student.get("official_receipt", ""),
                "payment_method": student.get("payment_method", ""),
                "date": student.get("date", ""),
                "amount_due": student.get("amount_due", None),
                "tuition_fee": student.get("tuition_fee", None),
                "miscellaneous": student.get("miscellaneous", ""),
                "balance": student.get("balance", None),
                "remarks": student.get("remarks", ""),
                "nationality": student.get("nationality", ""),
                "government_id": student.get("government_id", ""),
                "medical_forms": student.get("medical_forms", ""),
                "student_id_card": student.get("student_id_card", ""),
                "admission_letter": student.get("admission_letter", ""),
                "imageUrl": student.get("imageUrl", ""),
            }

            # Save the file and get the file path
            if "medical_forms" in student:
                student_data["medical_forms"] = save_file(student["medical_forms"])
            if "student_id_card" in student:
                student_data["student_id_card"] = save_file(student["student_id_card"])
            if "admission_letter" in student:
                student_data["admission_letter"] = save_file(
                    student["admission_letter"]
                )

            cls.collection.update_one(
                {"id": student["id"]}, {"$set": student_data}, upsert=True
            )

    def create(self):
        # Validate email
        try:
            validate_email(self.email)
        except ValidationError:
            self.email = ""

        # Generate student ID if not provided
        if not self.id:
            self.id = self.generate_student_id()

        # Save files and update paths
        self.medical_forms = (
            save_file(self.medical_forms) if self.medical_forms else None
        )
        self.student_id_card = (
            save_file(self.student_id_card) if self.student_id_card else None
        )
        self.admission_letter = (
            save_file(self.admission_letter) if self.admission_letter else None
        )

        # Insert into database
        Student.collection.insert_one(self.__dict__)
        return self
        return student

    def update(self, validated_data):
        # Update instance attributes with validated data
        for key, value in validated_data.items():
            setattr(self, key, value)

        # Save files and update paths
        self.medical_forms = (
            save_file(self.medical_forms) if self.medical_forms else None
        )
        self.student_id_card = (
            save_file(self.student_id_card) if self.student_id_card else None
        )
        self.admission_letter = (
            save_file(self.admission_letter) if self.admission_letter else None
        )

        # Update in database
        Student.collection.update_one({"id": self.id}, {"$set": self.__dict__})
        return self


# List of student data
students_data = [
    {
        "name": "John Lee",
        "id": "#00034",
        "level": 100,
        "program": "OFAD",
        "gender": "Male",
        "contact": "00800500342",
        "description": "",
        "date_of_admission": "2 May 2024",
        "payment_status": "Have Paid",
        "date_of_birth": "3rd February, 2024",
        "address": "3rd Avenue OH",
        "email": "klvnafriyie123@gmail.com",
        "intake": "",
        "official_receipt": "",
        "payment_method": "",
        "date": "",
        "amount_due": "",
        "tuition_fee": "",
        "miscellaneous": "",
        "balance": "",
        "remarks": "",
        "nationality": "American",
        "government_id": "123456789",
        "medical_forms": "",
        "student_id_card": "",
        "admission_letter": "",
        "imageurl": "../assets/medium-shot-female-nurse-outdoors.jpg",
    }
]

# Save or update all students
Student.save_or_update_many(students_data)


# Teacher data
class Teacher:
    collection = db["teachers"]

    def __init__(
        self,
        name,
        image,
        view_option,
        downloadable,
        id,
        contact,
        email,
        description,
        date_of_employment,
        subject_taught,
        date_of_birth,
        address,
        teachers_in_the_same_program,
        college_degree,
        nationality,
        government_id,
    ):
        self.name = name
        self.image = image
        self.view_option = view_option
        self.downloadable = downloadable
        self.id = id
        self.contact = contact
        self.email = email
        self.description = description
        self.date_of_employment = date_of_employment
        self.subject_taught = subject_taught
        self.date_of_birth = date_of_birth
        self.address = address
        self.teachers_in_the_same_program = teachers_in_the_same_program
        self.college_degree = college_degree
        self.nationality = nationality
        self.government_id = government_id

    def save(self):
        teacher_data = {
            "name": self.name,
            "image": self.image,
            "view_option": self.view_option,
            "downloadable": self.downloadable,
            "id": self.id,
            "contact": self.contact,
            "email": self.email,
            "description": self.description,
            "date_of_employment": self.date_of_employment,
            "subject_taught": self.subject_taught,
            "date_of_birth": self.date_of_birth,
            "address": self.address,
            "teachers_in_the_same_program": self.teachers_in_the_same_program,
            "college_degree": self.college_degree,
            "nationality": self.nationality,
            "government_id": self.government_id,
        }
        self.collection.insert_one(teacher_data)


# List of teachers
teachers_data = [
    {
        "image": "",
        "name": "James Sam",
        "view_option": "View File",
        "downloadable": "Download",
        "id": "#00345",
        "contact": "008000500342",
        "email": "klvnafriyie123@gmail.com",
        "description": "",
        "date_of_employment": "2nd May, 2024",
        "subject_taught": "Medical Science",
        "date_of_birth": "2nd May, 2024",
        "address": "3rd Avenue GH",
        "teachers_in_the_same_program": "Real Estate",
        "college_degree": "Computer science",
        "nationality": "American",
        "government_id": "123456789",
    },
]

# Save all teachers
for teacher_data in teachers_data:
    existing_teacher = Teacher.collection.find_one({"id": teacher_data["id"]})
    if existing_teacher:
        continue
    teacher = Teacher(
        name=teacher_data["name"],
        image=teacher_data["image"],
        view_option=teacher_data["view_option"],
        downloadable=teacher_data["downloadable"],
        id=teacher_data["id"],
        contact=teacher_data["contact"],
        email=teacher_data["email"],
        description=teacher_data["description"],
        date_of_employment=teacher_data["date_of_employment"],
        subject_taught=teacher_data["subject_taught"],
        date_of_birth=teacher_data["date_of_birth"],
        address=teacher_data["address"],
        teachers_in_the_same_program=teacher_data["teachers_in_the_same_program"],
        college_degree=teacher_data["college_degree"],
        nationality=teacher_data["nationality"],
        government_id=teacher_data["government_id"],
    )
    teacher.save()


class Inventory_Data:
    collection = db["inventoryData"]

    def __init__(self, image, itemName, category, skus, date, quantity, location):
        self._id = str(ObjectId())
        self.image = image
        self.itemName = itemName
        self.category = category
        self.skus = skus
        self.date = date
        self.quantity = quantity
        self.location = location

    def save(self):
        inventoryData = {
            "_id": self._id,
            "image": self.image,
            "itemName": self.itemName,
            "category": self.category,
            "skus": self.skus,
            "date": self.date,
            "quantity": self.quantity,
            "location": self.location,
        }
        self.collection.insert_one(inventoryData)


# Inventory data to be inserted
inventoriesData = [
    {
        "image": "/medium-shot-female-nurse-outdoors.jpg",
        "itemName": "Laptops",
        "category": "Academic",
        "skus": "121rr0i128e",
        "date": "5th May, 2024",
        "quantity": 50,
        "location": "School Warehouse",
    }
]

# Process each inventory data
for inventoryData in inventoriesData:
    # Check if the inventory already exists in the database based on itemName and skus
    existing_inventory = Inventory_Data.collection.find_one(
        {"itemName": inventoryData["itemName"], "skus": inventoryData["skus"]}
    )
    if existing_inventory:
        continue

    # Create an Inventory_Data object and save it to the database
    inventory_Data = Inventory_Data(
        image=inventoryData["image"],
        itemName=inventoryData["itemName"],
        category=inventoryData["category"],
        skus=inventoryData["skus"],
        date=inventoryData["date"],
        quantity=inventoryData["quantity"],
        location=inventoryData["location"],
    )
    inventory_Data.save()


class Payments_Data:
    collection = db["PaymentsData"]

    def __init__(
        self,
        invoiceId,
        createdOn,
        invoiceTo,
        studentId,
        amount,
        dueDate,
        statusType,
        imageUrl,
    ):
        self.invoiceId = invoiceId
        self.createdOn = createdOn
        self.invoiceTo = invoiceTo
        self.studentId = studentId

        # Handle empty or invalid amount
        try:
            self.amount = Decimal(amount)
        except (InvalidOperation, ValueError):
            self.amount = Decimal("0.00")

    
        try:
            self.dueDate = datetime.strptime(dueDate, "%dth %B, %Y")
        except ValueError:
            self.dueDate = None  # or set a default date

        self.statusType = statusType
        self.imageUrl = imageUrl

    def save(self):
        PaymentsData = {
            "invoiceId": self.invoiceId,
            "createdOn": self.createdOn,
            "invoiceTo": self.invoiceTo,
            "studentId": self.studentId,
            "amount": self.amount,
            "dueDate": self.dueDate,
            "statusType": self.statusType,
            "imageUrl": self.imageUrl,
        }
        self.collection.insert_one(PaymentsData)


paymentsData = [
    {
        "invoiceId": "00345",
        "createdOn": "5th May, 2024",
        "invoiceTo": "John Lee",
        "studentId": "#00034",
        "amount": 45.6, 
        "dueDate": "", 
        "statusType": "",
        "imageUrl": "",
    }
]

for contents in paymentsData:
    existing_payment = Payments_Data.collection.find_one(
        {"invoiceId": contents["invoiceId"]}
    )
    if existing_payment:
        continue
    payments_Data = Payments_Data(
        invoiceId=contents["invoiceId"],
        createdOn=contents["createdOn"],
        invoiceTo=contents["invoiceTo"],
        studentId=contents["studentId"],
        amount=contents["amount"],
        dueDate=contents["dueDate"],
        statusType=contents["statusType"],
        imageUrl=contents["imageUrl"],
    )

    payments_Data.save()
