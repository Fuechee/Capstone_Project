from rest_framework import serializers
from .models import Customer

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'first_name','last_name','email','address','city','zip_code','state','mobile_number','product_id']
        depth = 1