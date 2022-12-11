from django.urls import path
from products import views

urlpatterns = [
    path('registered', views.user_products),
    path('', views.products_list),
]