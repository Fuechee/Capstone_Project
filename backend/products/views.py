from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProductSerializer
from .models import Product

@api_view(['GET','POST'])
def products_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        serailizer = ProductSerializer(products, many=True)
        return Response(serailizer.data, status=status.HTTP_200_OK)