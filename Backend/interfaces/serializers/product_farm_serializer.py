from rest_framework import serializers
from core.infrastructure.persistence.models import ProductFarm


class ProductFarmSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductFarm
        fields = '__all__'
