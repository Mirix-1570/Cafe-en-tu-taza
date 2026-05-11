from dataclasses import dataclass
from typing import Optional


@dataclass
class Product:
    id: Optional[int]
    nombre: str
    categoria: str
    precio: int
    inventario: int
    order_id: int
