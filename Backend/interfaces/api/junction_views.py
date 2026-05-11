from rest_framework import generics
from core.infrastructure.persistence.models import FarmPost, OrderUser, ProductFarm, UserProduct
from interfaces.serializers import (
    FarmPostSerializer, OrderUserSerializer,
    ProductFarmSerializer, UserProductSerializer,
)


class FarmPostListCreateView(generics.ListCreateAPIView):
    queryset = FarmPost.objects.all()
    serializer_class = FarmPostSerializer


class FarmPostRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FarmPost.objects.all()
    serializer_class = FarmPostSerializer


class OrderUserListCreateView(generics.ListCreateAPIView):
    queryset = OrderUser.objects.all()
    serializer_class = OrderUserSerializer


class OrderUserRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderUser.objects.all()
    serializer_class = OrderUserSerializer


class ProductFarmListCreateView(generics.ListCreateAPIView):
    queryset = ProductFarm.objects.all()
    serializer_class = ProductFarmSerializer


class ProductFarmRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProductFarm.objects.all()
    serializer_class = ProductFarmSerializer


class UserProductListCreateView(generics.ListCreateAPIView):
    queryset = UserProduct.objects.all()
    serializer_class = UserProductSerializer


class UserProductRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProduct.objects.all()
    serializer_class = UserProductSerializer
