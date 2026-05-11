from django.db import models


class Post(models.Model):
    titulo = models.CharField(max_length=200)
    texto = models.CharField(max_length=2000)

    def __str__(self):
        return self.titulo

    class Meta:
        app_label = 'pfs_cafe_en_tu_taza'
