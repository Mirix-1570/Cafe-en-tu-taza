from typing import List, Optional
from core.domain.entities.product import Product
from core.domain.repositories.product_repository import ProductRepository
from core.infrastructure.persistence.models import Product as ProductModel


class DjangoProductRepository(ProductRepository):
    def get_all(self) -> List[Product]:
        return [self._to_entity(p) for p in ProductModel.objects.all()]

    def get_by_id(self, id: int) -> Optional[Product]:
        try:
            return self._to_entity(ProductModel.objects.get(id=id))
        except ProductModel.DoesNotExist:
            return None

    def create(self, product: Product) -> Product:
        model = ProductModel.objects.create(
            nombre=product.nombre, categoria=product.categoria,
            precio=product.precio, inventario=product.inventario,
            order_id=product.order_id,
        )
        return self._to_entity(model)

    def update(self, product: Product) -> Product:
        model = ProductModel.objects.get(id=product.id)
        model.nombre = product.nombre
        model.categoria = product.categoria
        model.precio = product.precio
        model.inventario = product.inventario
        model.order_id = product.order_id
        model.save()
        return self._to_entity(model)

    def delete(self, id: int) -> None:
        ProductModel.objects.get(id=id).delete()

    @staticmethod
    def _to_entity(model: ProductModel) -> Product:
        return Product(
            id=model.id, nombre=model.nombre, categoria=model.categoria,
            precio=model.precio, inventario=model.inventario, order_id=model.order_id,
        )
