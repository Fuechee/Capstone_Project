from django.db import models
from products.models import Product

# Create your models here.
class Customer(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    zip_code = models.IntegerField()
    state = models.CharField(max_length=255)
    mobile_number = models.CharField(max_length=20)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)