from django.shortcuts import render
from .models import Product, Cart, CartItem, Order, Payment
from .serializers import ProductSerializer, DetailedProductSerializer, UserSerializer, CartItemSerializer, SimpleCartSerializer, CartSerializer, OrderSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

########################### DASHBOARD #################################

from rest_framework import (viewsets, status, permissions as drf_permissions)
from django.db.models import Sum, F, Func, Value, FloatField, IntegerField, Case, When
from django.db.models.functions import Cast


##########################
from django.conf import settings

BASE_URL = settings.REACT_BASE_URL

######## EMAIL OTP #################################

import random
from django.core.mail import send_mail
from django.conf import settings

######################################################3

@api_view(['GET'])
def products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_detail(request, slug):
    product = Product.objects.get(slug = slug)
    serializer = DetailedProductSerializer(product)
    return Response(serializer.data) 

@api_view(["POST"])
def add_item(request):
    try:
        cart_code = request.data.get('cart_code')
        product_id = request.data.get('product_id')
    
        cart, created = Cart.objects.get_or_create(cart_code = cart_code)
        product = Product.objects.get(id=product_id)

        cartitem, created = CartItem.objects.get_or_create(cart = cart, product = product)
        cartitem.quantity = 1
        cartitem.save()

        serializer = CartItemSerializer()
        return Response({'datat': serializer.data, 'message': "Cartitem created successfully"}, status = 201)
    
    except Exception as e:
        return Response({'error': str(e)}, status = 400)
    
@api_view(['GET'])
def product_in_cart(request):
    cart_code = request.query_params.get("cart_code")
    product_id = request.query_params.get('product_id')

    cart = Cart.objects.get(cart_code=cart_code)
    product = Product.objects.get(id=product_id)

    product_exists_in_cart = CartItem.objects.filter(cart=cart, product=product).exists()

    return Response({'product_in_cart': product_exists_in_cart})


@api_view(['GET'])
def get_cart_stat(request):
    cart_code = request.query_params.get("cart_code")
    cart = Cart.objects.get(cart_code = cart_code, paid = False)
    serializer = SimpleCartSerializer(cart)
    return Response(serializer.data)

@api_view(['GET'])
def get_cart(request):
    cart_code = request.query_params.get("cart_code")
    cart = Cart.objects.get(cart_code=cart_code, paid=False)
    serializer = CartSerializer(cart)
    return Response(serializer.data)

@api_view(['PATCH'])
def update_quantity(request):
    try:
        cartitem_id = request.data.get('item_id')
        quantity = request.data.get('quantity')
        quantity = int(quantity)
        cartitem = CartItem.objects.get(id=cartitem_id)
        cartitem.quantity = quantity
        cartitem.save()
        serializer = CartItemSerializer(cartitem)
        return Response({ 'data':serializer.data, 'message': 'Cartitem updated successfully!'})

    except Exception as e:
        return Response({'error': str(e)}, status = 400)
    
@api_view(['POST'])
def delete_cartitem(request):
    cartitem_id = request.data.get('item_id')
    cartitem = CartItem.objects.get(id = cartitem_id)
    cartitem.delete()
    return Response({'message': "Item deleted successfully"}, status = status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_username(request):
    user = request.user
    return Response({'username': user.username})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_info(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data)



#################################################################
 # (COD)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_order(request):
    try:
        user = request.user
        data = request.data
        
        # Create order
        order = Order.objects.create(
            user=user,
            first_name=data['firstName'],
            last_name=data['lastName'],
            email=data['email'],
            phone=data['phone'],
            address=data['address'],
            country=data['country'],
            state=data['state'],
            city=data['city'],
            zip_code=data['zipCode'],
            order_note=data.get('orderNote', ''),
            order_total=data['orderTotal'],
        )
        
        # Create COD payment
        Payment.objects.create(
            order=order,
            payment_method='COD',
            is_paid=False
        )
        
        return Response({
            'success': True,
            'order_number': str(order.order_number),
            'message': 'COD order placed successfully!'
        }, status=status.HTTP_201_CREATED)
        
    except Exception as e:
        return Response({
            'success': False,
            'error': str(e)
        }, status=status.HTTP_400_BAD_REQUEST)


######## EMAIL OTP #################################

def generate_otp():
    return str(random.randint(100000, 999999))

def send_verification_email(user):
    from .models import EmailVerification
    # Delete any existing OTPs
    EmailVerification.objects.filter(user=user).delete()
    
    otp = generate_otp()
    EmailVerification.objects.create(user=user, otp=otp)
    
    send_mail(
        'Verify Your Email',
        f'Your OTP is: {otp}\nExpires in 5 minutes.',
        settings.DEFAULT_FROM_EMAIL,
        [user.email],
        fail_silently=False,
    )

@api_view(['POST'])
def send_otp(request):
    from django.contrib.auth import get_user_model
    User = get_user_model()
    
    email = request.data.get('email')
    try:
        user = User.objects.get(email=email)
        send_verification_email(user)
        return Response({'message': 'OTP sent'}, status=200)
    except User.DoesNotExist:
        return Response({'error': 'Email not found'}, status=404)

@api_view(['POST'])
def verify_otp(request):
    from django.contrib.auth import get_user_model
    from django.utils import timezone
    from .models import EmailVerification
    
    User = get_user_model()
    email = request.data.get('email')
    otp = request.data.get('otp')
    
    try:
        user = User.objects.get(email=email)
        verification = EmailVerification.objects.filter(user=user, otp=otp).first()
        
        if not verification:
            return Response({'error': 'Invalid OTP'}, status=400)
        if verification.is_expired():
            return Response({'error': 'OTP expired'}, status=400)
        
        verification.is_verified = True
        verification.save()
        return Response({'message': 'Email verified'}, status=200)
        
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=404)   

#######################################3

## DASHBOARD

from rest_framework import permissions
from .models import Product, StoreSales
from .serializers import StoreSalesSerializer, GenderDataSerializer, CountryDataSerializer, ProductCategoryDataSerializer


class StoreSalesViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = StoreSales.objects.all()
    serializer_class = StoreSalesSerializer

    def list(self, request): 
        queryset = StoreSales.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    

class GenderDataViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = StoreSales.objects.all()
    serializer_class = GenderDataSerializer

    def list(self, request): 
        queryset = StoreSales.objects.values('gender', 'gender__name')\
                   .annotate(quantity=Sum('quantity'))
        
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
class ProductCategoryViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = StoreSales.objects.all()
    serializer_class = ProductCategoryDataSerializer

    def list(self, request): 
        queryset = StoreSales.objects.values('product__category')\
                   .annotate(total_quantity=Sum('quantity'))\
                   .order_by('product__category')
        
        # Transform the data to match your serializer format
        result = {
            'canvas_art': 0,
            'prints': 0,
            'earrings': 0,
            'neckpieces': 0,
            'bags': 0,
            'keyrings': 0,
            'paper_craft': 0,
            'gifts_for_her': 0,
            'gifts_for_him': 0,
            'gifts_for_kids': 0,
            'birthday_boxes': 0
        }

        for item in queryset:
            category = item['product__category']
            if category in ['CANVAS', 'PRINTS', 'EARRINGS', 'NECKPIECES', 
                          'BAGS', 'KEYRINGS', 'PAPER_CRAFT', 
                          'GIFTS_FOR_HER', 'GIFTS_FOR_HIM', 
                          'GIFTS_FOR_KIDS', 'BIRTHDAY_BOXES']:
                result[category.lower()] = item['total_quantity']
        
        serializer = self.serializer_class(result)
        return Response(serializer.data)
    
class CountryDataViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = StoreSales.objects.all()
    serializer_class = CountryDataSerializer

    def list(self, request):
        queryset = StoreSales.objects.values('date__month')\
                   .annotate(quantityUnitedStates=Sum(
                       Case(
                           When(country__name="United States", then='quantity'),
                           default=0,
                           output_field=IntegerField()
                       )
                   ))\
                   .annotate(quantityUnitedKingdom=Sum(
                       Case(
                           When(country__name="United Kingdom", then='quantity'),
                           default=0,
                           output_field=IntegerField()
                       )
                   ))\
                   .annotate(quantityBangladesh=Sum(
                       Case(
                           When(country__name="Bangladesh", then='quantity'),
                           default=0,
                           output_field=IntegerField()
                       )
                   ))\
                   .annotate(quantityIndia=Sum(
                       Case(
                           When(country__name="India", then='quantity'),
                           default=0,
                           output_field=IntegerField()
                       )
                   ))
        
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

######################################################################


# views.py
import requests
from django.http import JsonResponse

@api_view(['GET'])
def get_ip_info(request):
    try:
        response = requests.get("https://ipapi.co/json")
        return JsonResponse(response.json())
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
    

