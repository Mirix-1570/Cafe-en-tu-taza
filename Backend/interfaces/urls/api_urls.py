from django.urls import path
from interfaces.api.producer_views import (
    ProducerListCreateView, ProducerRetrieveUpdateDestroyView,
)
from interfaces.api.farm_views import (
    FarmListCreateView, FarmRetrieveUpdateDestroyView,
)
from interfaces.api.product_views import (
    ProductListCreateView, ProductRetrieveUpdateDestroyView,
)
from interfaces.api.post_views import (
    PostListCreateView, PostRetrieveUpdateDestroyView,
)
from interfaces.api.order_views import (
    OrderListCreateView, OrderRetrieveUpdateDestroyView,
)
from interfaces.api.junction_views import (
    FarmPostListCreateView, FarmPostRetrieveUpdateDestroyView,
    OrderUserListCreateView, OrderUserRetrieveUpdateDestroyView,
    ProductFarmListCreateView, ProductFarmRetrieveUpdateDestroyView,
    UserProductListCreateView, UserProductRetrieveUpdateDestroyView,
)
from interfaces.api.user_views import (
    UserListCreateView, UserRetrieveUpdateDestroyView,
)

urlpatterns = [
    path('farm/', FarmListCreateView.as_view(), name='get y post farm'),
    path('farm/<int:pk>/', FarmRetrieveUpdateDestroyView.as_view(), name='put, delete y ById farm'),
    path('farmpost/', FarmPostListCreateView.as_view(), name='get y post farmpost'),
    path('farmpost/<int:pk>/', FarmPostRetrieveUpdateDestroyView.as_view(), name='put, delete y ById farmpost'),
    path('order/', OrderListCreateView.as_view(), name='get y post order'),
    path('order/<int:pk>/', OrderRetrieveUpdateDestroyView.as_view(), name='put, delete y ById order'),
    path('orderuser/', OrderUserListCreateView.as_view(), name='get y post orderuser'),
    path('orderuser/<int:pk>/', OrderUserRetrieveUpdateDestroyView.as_view(), name='put, delete y ById orderuser'),
    path('post/', PostListCreateView.as_view(), name='get y post post'),
    path('post/<int:pk>/', PostRetrieveUpdateDestroyView.as_view(), name='put, delete y ById post'),
    path('producer/', ProducerListCreateView.as_view(), name='get y post producer'),
    path('producer/<int:pk>/', ProducerRetrieveUpdateDestroyView.as_view(), name='put, delete y ById producer'),
    path('product/', ProductListCreateView.as_view(), name='get y post product'),
    path('product/<int:pk>/', ProductRetrieveUpdateDestroyView.as_view(), name='put, delete y ById product'),
    path('productfarm/', ProductFarmListCreateView.as_view(), name='get y post productfarm'),
    path('productfarm/<int:pk>/', ProductFarmRetrieveUpdateDestroyView.as_view(), name='put, delete y ById productfarm'),
    path('user/', UserListCreateView.as_view(), name='get y post user'),
    path('user/<int:pk>/', UserRetrieveUpdateDestroyView.as_view(), name='put, delete y ById user'),
    path('userproduct/', UserProductListCreateView.as_view(), name='get y post userproduct'),
    path('userproduct/<int:pk>/', UserProductRetrieveUpdateDestroyView.as_view(), name='put, delete y ById userproduct'),
]
