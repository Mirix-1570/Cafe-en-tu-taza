from typing import List
from core.domain.entities.product import Product
from core.domain.repositories.product_repository import ProductRepository
from core.application.dto.product_dto import ProductDTO


class ProductUseCases:
    def __init__(self, repository: ProductRepository):
        self._repository = repository

    def list_products(self) -> List[Product]:
        return self._repository.get_all()

    def get_product(self, id: int) -> Product:
        product = self._repository.get_by_id(id)
        if not product:
            raise ValueError(f"Product with id {id} not found")
        return product

    def create_product(self, dto: ProductDTO) -> Product:
        entity = Product(id=None, nombre=dto.nombre, categoria=dto.categoria,
                         precio=dto.precio, inventario=dto.inventario, order_id=dto.order_id)
        return self._repository.create(entity)

    def update_product(self, id: int, dto: ProductDTO) -> Product:
        entity = Product(id=id, nombre=dto.nombre, categoria=dto.categoria,
                         precio=dto.precio, inventario=dto.inventario, order_id=dto.order_id)
        return self._repository.update(entity)

    def delete_product(self, id: int) -> None:
        self._repository.delete(id)
