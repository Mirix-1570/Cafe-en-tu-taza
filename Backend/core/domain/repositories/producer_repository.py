from abc import ABC, abstractmethod
from typing import List, Optional
from core.domain.entities.producer import Producer


class ProducerRepository(ABC):
    @abstractmethod
    def get_all(self) -> List[Producer]:
        pass

    @abstractmethod
    def get_by_id(self, id: int) -> Optional[Producer]:
        pass

    @abstractmethod
    def create(self, producer: Producer) -> Producer:
        pass

    @abstractmethod
    def update(self, producer: Producer) -> Producer:
        pass

    @abstractmethod
    def delete(self, id: int) -> None:
        pass
