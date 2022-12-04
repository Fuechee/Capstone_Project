from django.urls import path
from products import views

urlpatterns = [
    path('all/', views.products_list),
]