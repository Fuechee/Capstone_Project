from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProductSerializer
from .models import Product

@api_view(['GET'])
@permission_classes([AllowAny])
def products_list(request):
    if request.method == 'GET':
        type_param = request.query_params.get('type')
        queryset = Product.objects.all()
        if type_param:
            queryset = queryset.filter(type=type_param)

        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def product_create(request):
    serializer = ProductSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save(user=request.user)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_products(request):
    products = Product.objects.filter(user_id=request.user.id)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)