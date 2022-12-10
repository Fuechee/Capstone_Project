from django.urls import path
from products import views

urlpatterns = [
    path('', views.user_products),
    path('all/', views.get_products),
]