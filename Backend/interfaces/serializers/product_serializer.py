from rest_framework import serializers
from core.infrastructure.persistence.models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
