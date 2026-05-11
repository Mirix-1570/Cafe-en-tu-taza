from interfaces.api.producer_views import ProducerListCreateView, ProducerRetrieveUpdateDestroyView
from interfaces.api.farm_views import FarmListCreateView, FarmRetrieveUpdateDestroyView
from interfaces.api.product_views import ProductListCreateView, ProductRetrieveUpdateDestroyView
from interfaces.api.post_views import PostListCreateView, PostRetrieveUpdateDestroyView
from interfaces.api.order_views import OrderListCreateView, OrderRetrieveUpdateDestroyView
from interfaces.api.junction_views import (
    FarmPostListCreateView, FarmPostRetrieveUpdateDestroyView,
    OrderUserListCreateView, OrderUserRetrieveUpdateDestroyView,
    ProductFarmListCreateView, ProductFarmRetrieveUpdateDestroyView,
    UserProductListCreateView, UserProductRetrieveUpdateDestroyView,
)
from interfaces.api.user_views import (
    UserListCreateView, UserRetrieveUpdateDestroyView,
)
