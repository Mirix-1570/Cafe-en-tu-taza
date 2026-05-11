from django.db import models
from .farm import Farm
from .post import Post


class FarmPost(models.Model):
    farm = models.ForeignKey(Farm, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.farm} - {self.post}"

    class Meta:
        app_label = 'pfs_cafe_en_tu_taza'
