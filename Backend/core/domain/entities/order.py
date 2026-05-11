from dataclasses import dataclass
from typing import Optional


@dataclass
class Order:
    id: Optional[int]
    emisor: str
    receptor: str
    numero_de_factura: int
    fecha: str
    forma_de_pago: str
    descripcion: str
    cantidad: int
    precio_unitario: int
    importe_total: int
    descuentos: Optional[str]
    impuestos: int
    cantidad_adeudada: int
    condiciones_de_pago: str
