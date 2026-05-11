from abc import ABC, abstractmethod
from typing import List, Optional
from core.domain.entities.post import Post


class PostRepository(ABC):
    @abstractmethod
    def get_all(self) -> List[Post]:
        pass

    @abstractmethod
    def get_by_id(self, id: int) -> Optional[Post]:
        pass

    @abstractmethod
    def create(self, post: Post) -> Post:
        pass

    @abstractmethod
    def update(self, post: Post) -> Post:
        pass

    @abstractmethod
    def delete(self, id: int) -> None:
        pass
