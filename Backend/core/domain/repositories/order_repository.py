from abc import ABC, abstractmethod
from typing import List, Optional
from core.domain.entities.order import Order


class OrderRepository(ABC):
    @abstractmethod
    def get_all(self) -> List[Order]:
        pass

    @abstractmethod
    def get_by_id(self, id: int) -> Optional[Order]:
        pass

    @abstractmethod
    def create(self, order: Order) -> Order:
        pass

    @abstractmethod
    def update(self, order: Order) -> Order:
        pass

    @abstractmethod
    def delete(self, id: int) -> None:
        pass
