from rest_framework import generics
from rest_framework.response import Response
from core.application.use_cases.farm_use_cases import FarmUseCases
from core.infrastructure.persistence.repositories.farm_repository import DjangoFarmRepository
from interfaces.serializers.farm_serializer import FarmSerializer
from core.application.dto.farm_dto import FarmDTO

repository = DjangoFarmRepository()
use_cases = FarmUseCases(repository)


class FarmListCreateView(generics.GenericAPIView):
    serializer_class = FarmSerializer

    def get(self, request):
        farms = use_cases.list_farms()
        serializer = self.get_serializer(farms, many=True)
        return Response(serializer.data)

    def post(self, request):
        dto = FarmDTO(**request.data)
        farm = use_cases.create_farm(dto)
        serializer = self.get_serializer(farm)
        return Response(serializer.data, status=201)


class FarmRetrieveUpdateDestroyView(generics.GenericAPIView):
    serializer_class = FarmSerializer

    def get(self, request, pk):
        farm = use_cases.get_farm(pk)
        serializer = self.get_serializer(farm)
        return Response(serializer.data)

    def put(self, request, pk):
        dto = FarmDTO(**request.data)
        farm = use_cases.update_farm(pk, dto)
        serializer = self.get_serializer(farm)
        return Response(serializer.data)

    def delete(self, request, pk):
        use_cases.delete_farm(pk)
        return Response(status=204)
