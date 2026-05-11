from rest_framework import serializers
from core.infrastructure.persistence.models import UserProduct


class UserProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProduct
        fields = '__all__'
