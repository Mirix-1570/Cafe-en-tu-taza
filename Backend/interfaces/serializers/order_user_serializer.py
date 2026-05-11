from rest_framework import serializers
from core.infrastructure.persistence.models import OrderUser


class OrderUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderUser
        fields = '__all__'
