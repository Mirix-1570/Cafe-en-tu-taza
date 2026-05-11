from rest_framework import generics
from rest_framework.response import Response
from core.application.use_cases.product_use_cases import ProductUseCases
from core.infrastructure.persistence.repositories.product_repository import DjangoProductRepository
from interfaces.serializers.product_serializer import ProductSerializer
from core.application.dto.product_dto import ProductDTO

repository = DjangoProductRepository()
use_cases = ProductUseCases(repository)


class ProductListCreateView(generics.GenericAPIView):
    serializer_class = ProductSerializer

    def get(self, request):
        products = use_cases.list_products()
        serializer = self.get_serializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        dto = ProductDTO(**request.data)
        product = use_cases.create_product(dto)
        serializer = self.get_serializer(product)
        return Response(serializer.data, status=201)


class ProductRetrieveUpdateDestroyView(generics.GenericAPIView):
    serializer_class = ProductSerializer

    def get(self, request, pk):
        product = use_cases.get_product(pk)
        serializer = self.get_serializer(product)
        return Response(serializer.data)

    def put(self, request, pk):
        dto = ProductDTO(**request.data)
        product = use_cases.update_product(pk, dto)
        serializer = self.get_serializer(product)
        return Response(serializer.data)

    def delete(self, request, pk):
        use_cases.delete_product(pk)
        return Response(status=204)
