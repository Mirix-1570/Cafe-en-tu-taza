from dataclasses import dataclass
from typing import Optional


@dataclass
class PostDTO:
    titulo: str
    texto: str
