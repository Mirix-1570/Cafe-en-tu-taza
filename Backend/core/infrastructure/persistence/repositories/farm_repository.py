from typing import List, Optional
from core.domain.entities.farm import Farm
from core.domain.repositories.farm_repository import FarmRepository
from core.infrastructure.persistence.models import Farm as FarmModel


class DjangoFarmRepository(FarmRepository):
    def get_all(self) -> List[Farm]:
        return [self._to_entity(f) for f in FarmModel.objects.all()]

    def get_by_id(self, id: int) -> Optional[Farm]:
        try:
            return self._to_entity(FarmModel.objects.get(id=id))
        except FarmModel.DoesNotExist:
            return None

    def create(self, farm: Farm) -> Farm:
        model = FarmModel.objects.create(
            nombre=farm.nombre, ubicacion=farm.ubicacion,
            extension=farm.extension, producer_id=farm.producer_id,
        )
        return self._to_entity(model)

    def update(self, farm: Farm) -> Farm:
        model = FarmModel.objects.get(id=farm.id)
        model.nombre = farm.nombre
        model.ubicacion = farm.ubicacion
        model.extension = farm.extension
        model.producer_id = farm.producer_id
        model.save()
        return self._to_entity(model)

    def delete(self, id: int) -> None:
        FarmModel.objects.get(id=id).delete()

    @staticmethod
    def _to_entity(model: FarmModel) -> Farm:
        return Farm(
            id=model.id, nombre=model.nombre, ubicacion=model.ubicacion,
            extension=model.extension, producer_id=model.producer_id,
        )
