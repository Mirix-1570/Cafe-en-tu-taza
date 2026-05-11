from django.db import models


class Order(models.Model):
    emisor = models.CharField(max_length=45)
    receptor = models.CharField(max_length=45)
    numero_de_factura = models.IntegerField(unique=True)
    fecha = models.DateField()
    forma_de_pago = models.CharField(max_length=30)
    descripcion = models.CharField(max_length=30)
    cantidad = models.IntegerField()
    precio_unitario = models.IntegerField()
    importe_total = models.IntegerField()
    descuentos = models.CharField(max_length=5, blank=True, null=True)
    impuestos = models.IntegerField()
    cantidad_adeudada = models.IntegerField()
    condiciones_de_pago = models.CharField(max_length=200)

    def __str__(self):
        return f"Factura #{self.numero_de_factura} - {self.emisor}"

    class Meta:
        app_label = 'pfs_cafe_en_tu_taza'
