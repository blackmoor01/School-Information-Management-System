from .db_connection import db
import datetime
import pymongo
from .uploadhelper import save_file


collection = db['students']
class Student:
    collection = db['students']

    def generate_student_id():
        current_year = datetime.datetime.now().year
    
    # Fetch the latest student record to determine the last used ID
        latest_student = collection.find_one(
        {'id': {'$regex': f'^{current_year}'}},
        sort=[('id', pymongo.DESCENDING)]
        )

        if latest_student:
        # Extract the numerical part and increment it
            last_id = int(latest_student['id'][4:])
            new_id = last_id + 1
        else:
        # If no student exists for the current year, start with 1
            new_id = 1
    
    # Ensure the ID is 3 digits long
        student_id = f"{current_year}{new_id:03d}"

        return student_id

    def __init__(self, name, level, program, gender, contact, description, date_of_admission, payment_status, date_of_birth, address, email, intake, official_receipt, payment_method, date, amount_due, tuition_fee, miscellaneous, balance, remarks, nationality, government_id, medical_forms, student_id_card, admission_letter):
        self.name = name
        self.id = generate_student_id()
        self.level = level
        self.program = program
        self.gender = gender
        self.contact = contact
        self.description = description
        self.date_of_admission = date_of_admission
        self.payment_status = payment_status
        self.date_of_birth = date_of_birth
        self.address = address
        self.email = email
        self.intake = intake
        self.official_receipt = official_receipt
        self.payment_method = payment_method
        self.date = date
        self.amount_due = amount_due
        self.tuition_fee = tuition_fee
        self.miscellaneous = miscellaneous
        self.balance = balance
        self.remarks = remarks
        self.nationality = nationality
        self.government_id = government_id
        self.medical_forms = medical_forms
        self.student_id_card = student_id_card
        self.admission_letter = admission_letter

    @classmethod
    def save_or_update_many(cls, students_data):
        for student in students_data:
            student_data = {
                "name": student["name"],
                "id": generate_student_id(),  # Generate the student ID here
                "level": student["level"],
                "program": student["program"],
                "gender": student["gender"],
                "contact": student["contact"],
                "description": student["description"],
                "date_of_admission": student["date_of_admission"],
                "payment_status": student["payment_status"],
                "date_of_birth": student["date_of_birth"],
                "address": student["address"],
                "email": student["email"],
                "intake": student["intake"],
                "official_receipt": student["official_receipt"],
                "payment_method": student["payment_method"],
                "date": student["date"],
                "amount_due": student["amount_due"],
                "tuition_fee": student["tuition_fee"],
                "miscellaneous": student["miscellaneous"],
                "balance": student["balance"],
                "remarks": student["remarks"],
                "nationality": student["nationality"],
                "government_id": student["government_id"],
                "medical_forms": student["medical_forms"],
                "student_id_card": student["student_id_card"],
                "admission_letter": student["admission_letter"]
            }

            cls.collection.update_one(
                {"id": student_data["id"]},
                {"$set": student_data},
                upsert=True
            )

    def generate_student_id():
        current_year = datetime.datetime.now().year
        latest_student = collection.find_one(
            {'id': {'$regex': f'^{current_year}'}},
            sort=[('id', pymongo.DESCENDING)]
        )
        if latest_student:
            last_id = int (latest_student['id'][4:1])
            new_id = last_id + 1

        else:
            new_id =1 
        

        student_id = f"{current_year}{new_id:03d}"

        return student_id

    def __init__(self, **kwargs):
        self.name = kwargs.get('name', '')
        self.id = kwargs.get('id', '')
        self.level = kwargs.get('level', None)
        self.program = kwargs.get('program', '')
        self.gender = kwargs.get('gender', '')
        self.contact = kwargs.get('contact', '')
        self.description = kwargs.get('description', '')
        self.date_of_admission = kwargs.get('date_of_admission', '')
        self.payment_status = kwargs.get('payment_status', '')
        self.date_of_birth = kwargs.get('date_of_birth', '')
        self.address = kwargs.get('address', '')
        self.email = kwargs.get('email', '')
        self.intake = kwargs.get('intake', '')
        self.official_receipt = kwargs.get('official_receipt', '')
        self.payment_method = kwargs.get('payment_method', '')
        self.date = kwargs.get('date', '')
        self.amount_due = kwargs.get('amount_due', None)
        self.tuition_fee = kwargs.get('tuition_fee', None)
        self.miscellaneous = kwargs.get('miscellaneous', '')
        self.balance = kwargs.get('balance', None)
        self.remarks = kwargs.get('remarks', '')
        self.nationality = kwargs.get('nationality', '')
        self.government_id = kwargs.get('government_id', '')
        self.medical_forms = kwargs.get('medical_forms', '')
        self.student_id_card = kwargs.get('student_id_card', '')
        self.admission_letter = kwargs.get('admission_letter', '')

    @classmethod
    def save_or_update_many(cls, students_data):
        for student in students_data:
            student_data = {
                "name": student.get("name", ""),
                "id": student.get("id", ""),
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
                "admission_letter": student.get("admission_letter", "")
            }

            # Save the file and get the file path
            if 'medical_forms' in student:
                student_data['medical_forms'] = save_file(student['medical_forms'])
            if 'student_id_card' in student:
                student_data['student_id_card'] = save_file(student['student_id_card'])
            if 'admission_letter' in student:
                student_data['admission_letter'] = save_file(student['admission_letter'])

            cls.collection.update_one(
                {"id": student["id"]},
                {"$set": student_data},
                upsert=True
            )

# List of student data
students_data = [
    {
        "name": 'John Lee',
        "id": '#00034',
        "level": 100,
        "program": 'OFAD',
        "gender": 'Male',
        "contact": '00800500342',
        "description": '',
        "date_of_admission": '2 May 2024',
        "payment_status": 'Have Paid',
        "date_of_birth": '3rd February, 2024',
        "address": '3rd Avenue OH',
        "email": 'klvnafriyie123@gmail.com',
        "intake": '',
        "official_receipt": '',
        "payment_method": '',
        "date": '',
        "amount_due": '',
        "tuition_fee": '',
        "miscellaneous": '',
        "balance": '',
        "remarks": '',
        "nationality": 'American',
        "government_id":'123456789',
        "medical_forms":"",
        "student_id_card":"",
        "admission_letter":""
    },
    {
        "name": 'Andy Tay',
        "id": '#00985',
        "level": 100,
        "program": 'IT Admin',
        "gender": 'Male',
        "contact": '00800500342',
        "description": '',
        "date_of_admission": '2 May 2024',
        "payment_status": 'Have Paid',
        "date_of_birth": '3rd February, 2024',
        "address": '3rd Avenue OH',
        "email": 'klvnafriyie123@gmail.com',
        "intake": '',
        "official_receipt": '',
        "payment_method": '',
        "date": '',
        "amount_due": '',
        "tuition_fee": '',
        "miscellaneous": '',
        "balance": '',
        "remarks": '',
        "nationality": 'Croatian',
        "government_id":'987654321',
        "medical_forms":"",
        "student_id_card":"",
        "admission_letter":""
    },
]

# Save or update all students
Student.save_or_update_many(students_data)




# Teacher data
class Teacher:
    collection = db["teachers"]

    def __init__(self, name, image, view_option, downloadable, id, contact, email, description, date_of_employment, subject_taught, date_of_birth, address, teachers_in_the_same_program, college_degree, nationality, government_id):
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
            "college_degree":self.college_degree,
            "nationality": self.nationality,
            "government_id": self.government_id
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
        "college_degree":"Computer science",
        "nationality":"American",
        "government_id":"123456789"
    },
]

# Save all teachers
for teacher_data in teachers_data:
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
        government_id=teacher_data["government_id"]
    )
    teacher.save()