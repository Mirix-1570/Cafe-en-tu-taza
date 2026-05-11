from abc import ABC, abstractmethod
from typing import List, Optional
from core.domain.entities.farm import Farm


class FarmRepository(ABC):
    @abstractmethod
    def get_all(self) -> List[Farm]:
        pass

    @abstractmethod
    def get_by_id(self, id: int) -> Optional[Farm]:
        pass

    @abstractmethod
    def create(self, farm: Farm) -> Farm:
        pass

    @abstractmethod
    def update(self, farm: Farm) -> Farm:
        pass

    @abstractmethod
    def delete(self, id: int) -> None:
        pass
