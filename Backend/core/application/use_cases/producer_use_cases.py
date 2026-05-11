from typing import List
from core.domain.entities.producer import Producer
from core.domain.repositories.producer_repository import ProducerRepository
from core.application.dto.producer_dto import ProducerDTO


class ProducerUseCases:
    def __init__(self, repository: ProducerRepository):
        self._repository = repository

    def list_producers(self) -> List[Producer]:
        return self._repository.get_all()

    def get_producer(self, id: int) -> Producer:
        producer = self._repository.get_by_id(id)
        if not producer:
            raise ValueError(f"Producer with id {id} not found")
        return producer

    def create_producer(self, dto: ProducerDTO) -> Producer:
        entity = Producer(id=None, nombre=dto.nombre, telefono=dto.telefono, cedula=dto.cedula)
        return self._repository.create(entity)

    def update_producer(self, id: int, dto: ProducerDTO) -> Producer:
        entity = Producer(id=id, nombre=dto.nombre, telefono=dto.telefono, cedula=dto.cedula)
        return self._repository.update(entity)

    def delete_producer(self, id: int) -> None:
        self._repository.delete(id)
