from rest_framework import serializers
from .models import UserAuthModel


class UserAuthModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAuthModel
        fields = '__all__'