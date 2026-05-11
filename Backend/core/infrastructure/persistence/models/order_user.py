from django.db import models
from django.contrib.auth.models import User
from .order import Order


class OrderUser(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.order} - {self.user}"

    class Meta:
        app_label = 'pfs_cafe_en_tu_taza'
