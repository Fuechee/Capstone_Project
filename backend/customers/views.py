from django.shortcuts import render
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from .serializers import CustomerSerializer
from .models import Customer

# Create your views here.
@api_view(['GET','POST'])
def customers_list(request):
    if request.method == 'GET':
        query_set = Customer.objects.all()
        serializer = CustomerSerializer(query_set, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = CustomerSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)