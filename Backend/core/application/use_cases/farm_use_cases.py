from typing import List
from core.domain.entities.farm import Farm
from core.domain.repositories.farm_repository import FarmRepository
from core.application.dto.farm_dto import FarmDTO


class FarmUseCases:
    def __init__(self, repository: FarmRepository):
        self._repository = repository

    def list_farms(self) -> List[Farm]:
        return self._repository.get_all()

    def get_farm(self, id: int) -> Farm:
        farm = self._repository.get_by_id(id)
        if not farm:
            raise ValueError(f"Farm with id {id} not found")
        return farm

    def create_farm(self, dto: FarmDTO) -> Farm:
        entity = Farm(id=None, nombre=dto.nombre, ubicacion=dto.ubicacion,
                      extension=dto.extension, producer_id=dto.producer_id)
        return self._repository.create(entity)

    def update_farm(self, id: int, dto: FarmDTO) -> Farm:
        entity = Farm(id=id, nombre=dto.nombre, ubicacion=dto.ubicacion,
                      extension=dto.extension, producer_id=dto.producer_id)
        return self._repository.update(entity)

    def delete_farm(self, id: int) -> None:
        self._repository.delete(id)
