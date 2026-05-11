from dataclasses import dataclass
from typing import Optional


@dataclass
class Post:
    id: Optional[int]
    titulo: str
    texto: str
