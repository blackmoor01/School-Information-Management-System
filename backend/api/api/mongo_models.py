from .db_connection import db

class Student:
    collection = db['students']

    def __init__(self, name, id, level, program, gender, contact, description, date_of_admission, payment_status, date_of_birth, address, email, intake, official_receipt, payment_method, date, amount_due, tuition_fee, miscellaneous, balance, remarks):
        self.name = name
        self.id = id
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

    @classmethod
    def save_or_update_many(cls, students_data):
        for student in students_data:
            student_data = {
                "name": student["name"],
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
                "remarks": student["remarks"]
            }
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
        "remarks": ''
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
        "remarks": ''
    },
    {
        "name": 'Bryan Adu',
        "id": '#00784',
        "level": 100,
        "program": 'Real Estates',
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
        "remarks": ''
    },
    {
        "name": 'Angel Ford',
        "id": '#00431',
        "level": 200,
        "program": 'Paralegal',
        "gender": 'Female',
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
        "remarks": ''
    },
    {
        "name": 'Wilmette Arthur',
        "id": '#00456',
        "level": 400,
        "program": 'CSWA',
        "gender": 'Female',
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
        "remarks": ''
    },
    {
        "name": 'Gloria John',
        "id": '#00674',
        "level": 200,
        "program": 'Paralegal',
        "gender": 'Female',
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
        "remarks": ''
    },
    {
        "name": 'Sandra Sia',
        "id": '#00986',
        "level": 200,
        "program": 'OFAD',
        "gender": 'Female',
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
        "remarks": ''
    },
    {
        "name": 'Ben Greenlish',
        "id": '#00326',
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
        "remarks": ''
    }
]

# Save or update all students
Student.save_or_update_many(students_data)




# Teacher data
class Teacher:
    collection = db["teachers"]

    def __init__(self, name, image, view_option, downloadable, id, contact, email, description, date_of_employment, subject_taught, date_of_birth, address, teachers_in_the_same_program):
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
            "teachers_in_the_same_program": self.teachers_in_the_same_program
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
        "teachers_in_the_same_program": "Real Estate"
    },
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
        "teachers_in_the_same_program": "Real Estate"
    },
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
        "teachers_in_the_same_program": "Real Estate"
    },
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
        "teachers_in_the_same_program": "Real Estate"
    },
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
        "teachers_in_the_same_program": "Real Estate"
    },
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
        "teachers_in_the_same_program": "Real Estate"
    },
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
        "teachers_in_the_same_program": "Real Estate"
    },
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
        "teachers_in_the_same_program": "Real Estate"
    },
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
        "teachers_in_the_same_program": "Real Estate"
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
        teachers_in_the_same_program=teacher_data["teachers_in_the_same_program"]
    )
    teacher.save()