from rest_framework import serializers;


class StudentSerializer(serializers.Serializer):
    _id = serializers.CharField(read_only=True) 
    name = serializers.CharField(max_length = 100)
    id = serializers.CharField(max_length = 100)
    level = serializers.IntegerField()
    program = serializers.CharField(max_length = 100)
    gender = serializers.CharField(max_length = 10)
    contact = serializers.CharField(max_length = 15)
    description = serializers.CharField(allow_blank=True)
    date_of_admission = serializers.DateField()
    payment_status = serializers.CharField(max_length=20)
    date_of_birth = serializers.DateField()
    address = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    intake = serializers.CharField(allow_blank=True)
    official_receipt = serializers.CharField(allow_blank=True)
    payment_method = serializers.CharField(allow_blank=True)
    date = serializers.CharField(allow_blank=True)
    amount_due = serializers.CharField(allow_blank=True)
    tuition_fee = serializers.CharField(allow_blank=True)
    miscellaneous = serializers.CharField(allow_blank=True)
    balance = serializers.CharField(allow_blank=True) 
    remarks = serializers.CharField(allow_blank=True)


class TeacherSerializer(serializers.Serializer):
    _id = serializers.CharField(read_only=True)
    name = serializers.CharField(max_length = 100)
    view_option = serializers.CharField(max_length = 15)
    downloadable = serializers.CharField(max_length = 15)
    id = serializers.CharField(max_length = 100)
    contact = serializers.CharField(max_length = 15)
    email = serializers.EmailField()
    description = serializers.CharField(allow_blank=True)
    date_of_employment = serializers.CharField(max_length = 25)
    date_of_birth = serializers.CharField(max_length = 25)
    address = serializers.CharField(max_length = 200)

