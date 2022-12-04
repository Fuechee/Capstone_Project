from django.db import models

# Create your models here.
class Product(models.Model):
    brand = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    price = models.IntegerField()
