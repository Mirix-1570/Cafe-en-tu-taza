from rest_framework import serializers
from core.infrastructure.persistence.models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
