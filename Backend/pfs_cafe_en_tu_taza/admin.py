from django.contrib import admin
from core.infrastructure.persistence.models import (
    Producer, Farm, Post, FarmPost, Order, OrderUser,
    Product, ProductFarm, UserProduct,
)

admin.site.register(Producer)
admin.site.register(Farm)
admin.site.register(Post)
admin.site.register(FarmPost)
admin.site.register(Order)
admin.site.register(OrderUser)
admin.site.register(Product)
admin.site.register(ProductFarm)
admin.site.register(UserProduct)
