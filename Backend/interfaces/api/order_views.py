from rest_framework import generics
from rest_framework.response import Response
from core.application.use_cases.order_use_cases import OrderUseCases
from core.infrastructure.persistence.repositories.order_repository import DjangoOrderRepository
from interfaces.serializers.order_serializer import OrderSerializer
from core.application.dto.order_dto import OrderDTO

repository = DjangoOrderRepository()
use_cases = OrderUseCases(repository)


class OrderListCreateView(generics.GenericAPIView):
    serializer_class = OrderSerializer

    def get(self, request):
        orders = use_cases.list_orders()
        serializer = self.get_serializer(orders, many=True)
        return Response(serializer.data)

    def post(self, request):
        dto = OrderDTO(**request.data)
        order = use_cases.create_order(dto)
        serializer = self.get_serializer(order)
        return Response(serializer.data, status=201)


class OrderRetrieveUpdateDestroyView(generics.GenericAPIView):
    serializer_class = OrderSerializer

    def get(self, request, pk):
        order = use_cases.get_order(pk)
        serializer = self.get_serializer(order)
        return Response(serializer.data)

    def put(self, request, pk):
        dto = OrderDTO(**request.data)
        order = use_cases.update_order(pk, dto)
        serializer = self.get_serializer(order)
        return Response(serializer.data)

    def delete(self, request, pk):
        use_cases.delete_order(pk)
        return Response(status=204)
