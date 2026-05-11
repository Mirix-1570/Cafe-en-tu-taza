from dataclasses import dataclass
from typing import Optional


@dataclass
class Farm:
    id: Optional[int]
    nombre: str
    ubicacion: str
    extension: int
    producer_id: int
