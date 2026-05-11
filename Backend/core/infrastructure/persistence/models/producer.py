from django.db import models


class Producer(models.Model):
    nombre = models.CharField(max_length=45)
    telefono = models.IntegerField(unique=True)
    cedula = models.IntegerField(unique=True)

    def __str__(self):
        return self.nombre

    class Meta:
        app_label = 'pfs_cafe_en_tu_taza'
