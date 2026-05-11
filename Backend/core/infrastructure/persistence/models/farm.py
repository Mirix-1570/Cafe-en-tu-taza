from django.db import models
from .producer import Producer


class Farm(models.Model):
    nombre = models.CharField(max_length=45)
    ubicacion = models.CharField(max_length=20, unique=True)
    extension = models.IntegerField()
    producer = models.ForeignKey(Producer, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

    class Meta:
        app_label = 'pfs_cafe_en_tu_taza'
