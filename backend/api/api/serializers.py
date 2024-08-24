from rest_framework import serializers;
from rest_framework.exceptions import ValidationError
from decimal import Decimal, InvalidOperation
import logging
from datetime import datetime, date

logger = logging.getLogger(__name__)



def validate_contact(value):
    if not value.isdigit():
        raise ValidationError("Contact field must contain only numbers.")
    return value


class FlexibleDateField(serializers.DateField):
    def to_internal_value(self, value):
        if isinstance(value, datetime):
            return value.date()
        elif isinstance(value, date):
            return value
        else:
            return super().to_internal_value(value)

class StudentSerializer(serializers.Serializer):
    _id = serializers.CharField(read_only=True) 
    name = serializers.CharField(max_length=100, required=False, default="")
    id = serializers.CharField(max_length=15, required=False, default="")
    level = serializers.CharField(required=False, allow_null=True)
    program = serializers.CharField(max_length=100, required=False, default="")
    gender = serializers.CharField(max_length=10, required=False, default="")
    contact = serializers.CharField(max_length=15, required=False, default="", validators=[validate_contact])
    description = serializers.CharField(allow_blank=True, required=False, default="")
    date_of_admission = FlexibleDateField(required=False, allow_null = True)
    payment_status = serializers.CharField(max_length=20, required=False, default="")
    date_of_birth = FlexibleDateField(required=False, allow_null=True)
    address = serializers.CharField(max_length=255, required=False, default="")
    email = serializers.EmailField(required=False, default="")
    intake = serializers.CharField(allow_blank=True, required=False, default="")
    official_receipt = serializers.CharField(allow_blank=True, required=False, default="")
    payment_method = serializers.CharField(allow_blank=True, required=False, default="")
    date = serializers.CharField(allow_blank=True, required=False, default="")
    amount_due = serializers.DecimalField(max_digits=10, decimal_places=2, required=False, allow_null=True)
    tuition_fee = serializers.DecimalField(max_digits=10, decimal_places=2, required=False, allow_null=True)
    miscellaneous = serializers.CharField(allow_blank=True, required=False, default="")
    balance = serializers.DecimalField(max_digits=10, decimal_places=2, required=False, allow_null=True) 
    remarks = serializers.CharField(allow_blank=True, required=False, default="")
    nationality = serializers.CharField(max_length=25, required=False, default="")
    government_id = serializers.CharField(max_length=50, required=False, default="")
    medical_forms = serializers.FileField(required=False, allow_null=True,write_only=False)
    student_id_card = serializers.FileField(required=False, allow_null=True,write_only=False)
    admission_letter = serializers.FileField(required=False, allow_null=True, write_only=False)


    def to_internal_value(self, data):
        for field in ['amount_due', 'tuition_fee', 'balance']:
            if field in data:
                value = data[field]
                if isinstance(value, str) and value.strip() == '':
                    data[field] = None
                else:
                    try:
                        data[field] = Decimal(value)
                    except (ValueError, InvalidOperation) as e:
                        data[field] = None
                        print(f"Error converting {field} to Decimal: {e}")
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


class PaymentsDataSerializer(serializers.Serializer):
    _id = serializers.CharField(read_only=True)
    imageUrl = serializers.ImageField(required=False, default="")
    invoiceId = serializers.CharField(max_length=20, required=False, default="")
    createdOn= FlexibleDateField(required=False, allow_null = True)
    invoiceTo = serializers.CharField(max_length=100, required=False, default="")
    studentId = serializers.CharField(max_length=30, required=False, default="")
    amount = serializers.DecimalField(max_digits=10, decimal_places=2, required=False, allow_null=True)
    dueDate = FlexibleDateField(required=False, allow_null = True)
    statusType = serializers.CharField(max_length=20, required=False, default="")


    def validate_amount(self, value):
        if value is None or value == "":
            return Decimal("0.00")  # Default value if amount is empty or null
        try:
            # Attempt to convert the value to a Decimal
            return Decimal(str(value).strip())
        except (InvalidOperation, ValueError):
            # Raise a validation error if conversion fails
            raise serializers.ValidationError("Invalid amount value. Please provide a valid decimal number.")

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Additional representation handling if necessary
        return representation