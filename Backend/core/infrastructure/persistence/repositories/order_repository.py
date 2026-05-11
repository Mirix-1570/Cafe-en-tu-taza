from typing import List, Optional
from core.domain.entities.order import Order
from core.domain.repositories.order_repository import OrderRepository
from core.infrastructure.persistence.models import Order as OrderModel


class DjangoOrderRepository(OrderRepository):
    def get_all(self) -> List[Order]:
        return [self._to_entity(o) for o in OrderModel.objects.all()]

    def get_by_id(self, id: int) -> Optional[Order]:
        try:
            return self._to_entity(OrderModel.objects.get(id=id))
        except OrderModel.DoesNotExist:
            return None

    def create(self, order: Order) -> Order:
        model = OrderModel.objects.create(
            emisor=order.emisor, receptor=order.receptor,
            numero_de_factura=order.numero_de_factura, fecha=order.fecha,
            forma_de_pago=order.forma_de_pago, descripcion=order.descripcion,
            cantidad=order.cantidad, precio_unitario=order.precio_unitario,
            importe_total=order.importe_total, descuentos=order.descuentos,
            impuestos=order.impuestos, cantidad_adeudada=order.cantidad_adeudada,
            condiciones_de_pago=order.condiciones_de_pago,
        )
        return self._to_entity(model)

    def update(self, order: Order) -> Order:
        model = OrderModel.objects.get(id=order.id)
        model.emisor = order.emisor
        model.receptor = order.receptor
        model.numero_de_factura = order.numero_de_factura
        model.fecha = order.fecha
        model.forma_de_pago = order.forma_de_pago
        model.descripcion = order.descripcion
        model.cantidad = order.cantidad
        model.precio_unitario = order.precio_unitario
        model.importe_total = order.importe_total
        model.descuentos = order.descuentos
        model.impuestos = order.impuestos
        model.cantidad_adeudada = order.cantidad_adeudada
        model.condiciones_de_pago = order.condiciones_de_pago
        model.save()
        return self._to_entity(model)

    def delete(self, id: int) -> None:
        OrderModel.objects.get(id=id).delete()

    @staticmethod
    def _to_entity(model: OrderModel) -> Order:
        return Order(
            id=model.id, emisor=model.emisor, receptor=model.receptor,
            numero_de_factura=model.numero_de_factura, fecha=str(model.fecha),
            forma_de_pago=model.forma_de_pago, descripcion=model.descripcion,
            cantidad=model.cantidad, precio_unitario=model.precio_unitario,
            importe_total=model.importe_total, descuentos=model.descuentos,
            impuestos=model.impuestos, cantidad_adeudada=model.cantidad_adeudada,
            condiciones_de_pago=model.condiciones_de_pago,
        )
