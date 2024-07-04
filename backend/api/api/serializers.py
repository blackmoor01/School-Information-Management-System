from rest_framework import serializers;


class StudentSerializer(serializers.Serializer):
    _id = serializers.CharField(read_only=True, required=False, default="") 
    name = serializers.CharField(max_length=100, required=False, default="")
    id = serializers.CharField(max_length=100, required=False, default="")
    level = serializers.CharField(required=False, allow_null=True)
    program = serializers.CharField(max_length=100, required=False, default="")
    gender = serializers.CharField(max_length=10, required=False, default="")
    contact = serializers.CharField(max_length=15, required=False, default="")
    description = serializers.CharField(allow_blank=True, required=False, default="")
    date_of_admission = serializers.DateField(required=False, default="")
    payment_status = serializers.CharField(max_length=20, required=False, default="")
    date_of_birth = serializers.DateField(required=False, default="")
    address = serializers.CharField(max_length=255, required=False, default="")
    email = serializers.EmailField(required=False, default="")
    intake = serializers.CharField(allow_blank=True, required=False, default="")
    official_receipt = serializers.CharField(allow_blank=True, required=False, default="")
    payment_method = serializers.CharField(allow_blank=True, required=False, default="")
    date = serializers.CharField(allow_blank=True, required=False, default="")
    amount_due = serializers.CharField(allow_blank=True, required=False, default="")
    tuition_fee = serializers.CharField(allow_blank=True, required=False, default="")
    miscellaneous = serializers.CharField(allow_blank=True, required=False, default="")
    balance = serializers.CharField(allow_blank=True, required=False, default="") 
    remarks = serializers.CharField(allow_blank=True, required=False, default="")
    nationality = serializers.CharField(max_length=25, required=False, default="")
    government_id = serializers.CharField(max_length=50, required=False, default="")
    medical_forms = serializers.FileField(required=False, allow_null=True)
    student_id_card = serializers.FileField(required=False, allow_null=True)
    admission_letter = serializers.FileField(required=False, allow_null=True)

    def to_internal_value(self, data):
        for field in ['level', 'amount_due', 'tuition_fee', 'balance']:  # Add other integer fields as needed
            if field in data and data[field] == '':
                data[field] = None
        return super().to_internal_value(data)

class TeacherSerializer(serializers.Serializer):
    _id = serializers.CharField(read_only=True)
    name = serializers.CharField(max_length=100, required=False, default="")
    view_option = serializers.CharField(max_length=15, required=False, default="")
    downloadable = serializers.CharField(max_length=15, required=False, default="")
    id = serializers.CharField(max_length=100, required=False, default="")
    contact = serializers.CharField(max_length=15, required=False, default="")
    email = serializers.EmailField(required=False, default="")
    description = serializers.CharField(allow_blank=True, required=False, default="")
    date_of_employment = serializers.CharField(max_length=25, required=False, default="")
    date_of_birth = serializers.CharField(max_length=25, required=False, default="")
    address = serializers.CharField(max_length=200, required=False, default="")
    nationality = serializers.CharField(allow_blank=True, required=False, default="")
    government_id = serializers.CharField(allow_blank=True, required=False, default="")
    subject_taught = serializers.CharField(allow_blank=True, required=False, default="")
    college_degree = serializers.CharField(allow_blank=True, required=False, default="")


class InventoryDataSerializer(serializers.Serializer):
    _id = serializers.CharField(read_only=True) 
    image = serializers.CharField(required=False, default="")
    itemName = serializers.CharField(max_length=100, default="")
    category = serializers.CharField(max_length=100, default="")
    skus = serializers.CharField(max_length=100, default="")
    date = serializers.DateField(required=False, default="")
    quantity = serializers.IntegerField(required=False, default="")
    location = serializers.CharField(max_length = 100, default="")