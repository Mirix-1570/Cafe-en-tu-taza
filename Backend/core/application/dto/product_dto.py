from dataclasses import dataclass


@dataclass
class ProductDTO:
    nombre: str
    categoria: str
    precio: int
    inventario: int
    order_id: int
