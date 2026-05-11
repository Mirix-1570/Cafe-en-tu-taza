from django.db import models
from .product import Product
from .farm import Farm


class ProductFarm(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    farm = models.ForeignKey(Farm, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.product} - {self.farm}"

    class Meta:
        app_label = 'pfs_cafe_en_tu_taza'
