from dataclasses import dataclass
from typing import Optional


@dataclass
class Producer:
    id: Optional[int]
    nombre: str
    telefono: int
    cedula: int
