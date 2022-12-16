from django.urls import path
from products import views

urlpatterns = [
    path('registered', views.user_products),
    path('create/', views.product_create),
    path('', views.products_list),
]