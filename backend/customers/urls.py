from django.urls import path
from customers import views

urlpatterns = [
    path('', views.registered_customers),
    path('all/', views.customers_list),
]
