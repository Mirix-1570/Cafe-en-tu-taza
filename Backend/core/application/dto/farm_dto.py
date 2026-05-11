from dataclasses import dataclass


@dataclass
class FarmDTO:
    nombre: str
    ubicacion: str
    extension: int
    producer_id: int
