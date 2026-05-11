from rest_framework import serializers
from core.infrastructure.persistence.models import Farm


class FarmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farm
        fields = '__all__'
