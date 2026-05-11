from typing import List
from core.domain.entities.post import Post
from core.domain.repositories.post_repository import PostRepository
from core.application.dto.post_dto import PostDTO


class PostUseCases:
    def __init__(self, repository: PostRepository):
        self._repository = repository

    def list_posts(self) -> List[Post]:
        return self._repository.get_all()

    def get_post(self, id: int) -> Post:
        post = self._repository.get_by_id(id)
        if not post:
            raise ValueError(f"Post with id {id} not found")
        return post

    def create_post(self, dto: PostDTO) -> Post:
        entity = Post(id=None, titulo=dto.titulo, texto=dto.texto)
        return self._repository.create(entity)

    def update_post(self, id: int, dto: PostDTO) -> Post:
        entity = Post(id=id, titulo=dto.titulo, texto=dto.texto)
        return self._repository.update(entity)

    def delete_post(self, id: int) -> None:
        self._repository.delete(id)
