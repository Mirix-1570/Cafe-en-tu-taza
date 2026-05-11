from rest_framework import generics
from rest_framework.response import Response
from core.application.use_cases.producer_use_cases import ProducerUseCases
from core.infrastructure.persistence.repositories.producer_repository import DjangoProducerRepository
from interfaces.serializers.producer_serializer import ProducerSerializer
from core.application.dto.producer_dto import ProducerDTO

repository = DjangoProducerRepository()
use_cases = ProducerUseCases(repository)


class ProducerListCreateView(generics.GenericAPIView):
    serializer_class = ProducerSerializer

    def get(self, request):
        producers = use_cases.list_producers()
        serializer = self.get_serializer(producers, many=True)
        return Response(serializer.data)

    def post(self, request):
        dto = ProducerDTO(**request.data)
        producer = use_cases.create_producer(dto)
        serializer = self.get_serializer(producer)
        return Response(serializer.data, status=201)


class ProducerRetrieveUpdateDestroyView(generics.GenericAPIView):
    serializer_class = ProducerSerializer

    def get(self, request, pk):
        producer = use_cases.get_producer(pk)
        serializer = self.get_serializer(producer)
        return Response(serializer.data)

    def put(self, request, pk):
        dto = ProducerDTO(**request.data)
        producer = use_cases.update_producer(pk, dto)
        serializer = self.get_serializer(producer)
        return Response(serializer.data)

    def delete(self, request, pk):
        use_cases.delete_producer(pk)
        return Response(status=204)
