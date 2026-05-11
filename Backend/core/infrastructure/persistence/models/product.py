from django.db import models
from .order import Order


class Product(models.Model):
    nombre = models.CharField(max_length=45)
    categoria = models.CharField(max_length=30)
    precio = models.IntegerField()
    inventario = models.IntegerField()
    order = models.ForeignKey(Order, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

    class Meta:
        app_label = 'pfs_cafe_en_tu_taza'
