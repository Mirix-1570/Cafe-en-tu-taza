from typing import List
from core.domain.entities.order import Order
from core.domain.repositories.order_repository import OrderRepository
from core.application.dto.order_dto import OrderDTO


class OrderUseCases:
    def __init__(self, repository: OrderRepository):
        self._repository = repository

    def list_orders(self) -> List[Order]:
        return self._repository.get_all()

    def get_order(self, id: int) -> Order:
        order = self._repository.get_by_id(id)
        if not order:
            raise ValueError(f"Order with id {id} not found")
        return order

    def create_order(self, dto: OrderDTO) -> Order:
        entity = Order(
            id=None, emisor=dto.emisor, receptor=dto.receptor,
            numero_de_factura=dto.numero_de_factura, fecha=dto.fecha,
            forma_de_pago=dto.forma_de_pago, descripcion=dto.descripcion,
            cantidad=dto.cantidad, precio_unitario=dto.precio_unitario,
            importe_total=dto.importe_total, descuentos=dto.descuentos,
            impuestos=dto.impuestos, cantidad_adeudada=dto.cantidad_adeudada,
            condiciones_de_pago=dto.condiciones_de_pago,
        )
        return self._repository.create(entity)

    def update_order(self, id: int, dto: OrderDTO) -> Order:
        entity = Order(
            id=id, emisor=dto.emisor, receptor=dto.receptor,
            numero_de_factura=dto.numero_de_factura, fecha=dto.fecha,
            forma_de_pago=dto.forma_de_pago, descripcion=dto.descripcion,
            cantidad=dto.cantidad, precio_unitario=dto.precio_unitario,
            importe_total=dto.importe_total, descuentos=dto.descuentos,
            impuestos=dto.impuestos, cantidad_adeudada=dto.cantidad_adeudada,
            condiciones_de_pago=dto.condiciones_de_pago,
        )
        return self._repository.update(entity)

    def delete_order(self, id: int) -> None:
        self._repository.delete(id)
