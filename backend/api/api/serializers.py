from rest_framework import serializers;


class StudentSerializer(serializers.Serializer):
    name = serializers.CharField()
    id = serializers.CharField()
    level = serializers.IntegerField()
    program = serializers.CharField()
    gender = serializers.CharField()
    contact = serializers.CharField()
