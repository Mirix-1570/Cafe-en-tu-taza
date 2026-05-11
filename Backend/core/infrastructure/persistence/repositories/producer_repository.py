from typing import List, Optional
from core.domain.entities.producer import Producer
from core.domain.repositories.producer_repository import ProducerRepository
from core.infrastructure.persistence.models import Producer as ProducerModel


class DjangoProducerRepository(ProducerRepository):
    def get_all(self) -> List[Producer]:
        return [self._to_entity(p) for p in ProducerModel.objects.all()]

    def get_by_id(self, id: int) -> Optional[Producer]:
        try:
            return self._to_entity(ProducerModel.objects.get(id=id))
        except ProducerModel.DoesNotExist:
            return None

    def create(self, producer: Producer) -> Producer:
        model = ProducerModel.objects.create(
            nombre=producer.nombre, telefono=producer.telefono, cedula=producer.cedula
        )
        return self._to_entity(model)

    def update(self, producer: Producer) -> Producer:
        model = ProducerModel.objects.get(id=producer.id)
        model.nombre = producer.nombre
        model.telefono = producer.telefono
        model.cedula = producer.cedula
        model.save()
        return self._to_entity(model)

    def delete(self, id: int) -> None:
        ProducerModel.objects.get(id=id).delete()

    @staticmethod
    def _to_entity(model: ProducerModel) -> Producer:
        return Producer(
            id=model.id, nombre=model.nombre,
            telefono=model.telefono, cedula=model.cedula,
        )
