from rest_framework import serializers
from core.infrastructure.persistence.models import FarmPost


class FarmPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarmPost
        fields = '__all__'
