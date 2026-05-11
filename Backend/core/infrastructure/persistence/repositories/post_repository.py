from typing import List, Optional
from core.domain.entities.post import Post
from core.domain.repositories.post_repository import PostRepository
from core.infrastructure.persistence.models import Post as PostModel


class DjangoPostRepository(PostRepository):
    def get_all(self) -> List[Post]:
        return [self._to_entity(p) for p in PostModel.objects.all()]

    def get_by_id(self, id: int) -> Optional[Post]:
        try:
            return self._to_entity(PostModel.objects.get(id=id))
        except PostModel.DoesNotExist:
            return None

    def create(self, post: Post) -> Post:
        model = PostModel.objects.create(titulo=post.titulo, texto=post.texto)
        return self._to_entity(model)

    def update(self, post: Post) -> Post:
        model = PostModel.objects.get(id=post.id)
        model.titulo = post.titulo
        model.texto = post.texto
        model.save()
        return self._to_entity(model)

    def delete(self, id: int) -> None:
        PostModel.objects.get(id=id).delete()

    @staticmethod
    def _to_entity(model: PostModel) -> Post:
        return Post(id=model.id, titulo=model.titulo, texto=model.texto)
