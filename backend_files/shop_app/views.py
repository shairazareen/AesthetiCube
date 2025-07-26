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

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def create_order(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            customer_details = data.get('customerDetails')
            order_details = data.get('orderDetails')

            # Validate required fields
            required_fields = ['name', 'lastName', 'email', 'phone', 'address', 'country', 'state', 'city', 'zipCode', 'total', 'items']
            if not all(field in customer_details for field in required_fields):
                return JsonResponse({'message': 'Missing required fields'}, status=status.HTTP_400_BAD_REQUEST)

            if not request.user.is_authenticated:
                return JsonResponse({'message': 'User not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)

            # Create a new order
            order = Order.objects.create(
                user=request.user,
                first_name=customer_details['name'],
                last_name=customer_details['lastName'],
                email=customer_details['email'],
                phone=customer_details['phone'],
                address=customer_details['address'],
                country=customer_details['country'],
                state=customer_details['state'],
                city=customer_details['city'],
                zip_code=customer_details['zipCode'],
                order_note=customer_details.get('orderNote', ''),
                order_total=order_details['total'],
            )

            # Create order items
            for item in order_details['items']:
                try:
                    product = Product.objects.get(id=item['id'])
                    CartItem.objects.create(
                        cart=order.cart,
                        product=product,
                        quantity=item['quantity']
                    )
                except Product.DoesNotExist:
                    return JsonResponse({'message': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)

            # Send order confirmation email
            try:
                send_order_confirmation_email(customer_details['email'], customer_details, order_details)
            except Exception as e:
                logger.error(f"Failed to send order confirmation email: {str(e)}")
                return JsonResponse({'message': 'Order placed successfully but email sending failed'}, status=status.HTTP_200_OK)

            return JsonResponse({'message': 'Order placed successfully and email sent!'}, status=status.HTTP_200_OK)
        except Exception as e:
            return JsonResponse({'message': 'Failed to place order. Please try again.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def send_order_confirmation_email(email, customer_details, order_details):
    subject = 'Order Confirmation - Receipt'
    message = f"""
    Thank you for your purchase, {customer_details['name']}!
    We’ve received your order. You’ll get an email confirmation shortly.

    Order Details:
    Name: {customer_details['name']}
    Address: {customer_details['address']}
    Phone: {customer_details['phone']}
    Email: {customer_details['email']}
    Payment Method: {customer_details['paymentMethod']}

    Ordered Items:
    """
    for item in order_details['items']:
        message += f"""
        {item['name']}
        Price: ${item['price']}
        Quantity: {item['quantity']}
        """
    message += f"\nTotal: ${order_details['total']}"

    send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [email], fail_silently=False)



######## EMAIL OTP #################################

import secrets
import logging
from django.core.cache import cache
from functools import wraps
from datetime import timedelta
from django.utils import timezone
from django.contrib.auth import get_user_model
#from django_ratelimit.decorators import ratelimit
from .models import EmailVerification
import time

logger = logging.getLogger(__name__)
User = get_user_model()


def generate_otp():
    """Generate a secure 6-digit OTP"""
    return str(secrets.randbelow(900000) + 100000)  # 100000-999999

def get_client_ip(request):
    """Get client IP address for rate limiting"""
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    return x_forwarded_for.split(',')[0] if x_forwarded_for else request.META.get('REMOTE_ADDR')

rate_limit_store = {}
last_cleanup = timezone.now()

def cleanup_rate_limits():
    """Clean up old rate limit entries"""
    global last_cleanup, rate_limit_store
    now = timezone.now()
    if (now - last_cleanup).seconds > 3600:  # Cleanup every hour
        rate_limit_store = {
            ip: data for ip, data in rate_limit_store.items() 
            if (now - data['last_request']).seconds < 3600
        }
        last_cleanup = now

@api_view(['POST'])
def send_otp(request):
    """Send OTP with simple in-memory rate limiting"""
    global rate_limit_store
    
    email = request.data.get('email', '').lower().strip()
    if not email or '@' not in email:
        return Response({'error': 'Invalid email'}, status=status.HTTP_400_BAD_REQUEST)

    # Simple rate limiting (5 requests per hour per IP)
    ip = get_client_ip(request)
    cleanup_rate_limits()
    
    if ip in rate_limit_store:
        if rate_limit_store[ip]['count'] >= 5:
            return Response(
                {'error': 'Too many requests. Please try again later.'},
                status=status.HTTP_429_TOO_MANY_REQUESTS
            )
        rate_limit_store[ip]['count'] += 1
    else:
        rate_limit_store[ip] = {'count': 1, 'last_request': timezone.now()}

    try:
        user = User.objects.get(email=email)
        otp = generate_otp()
        EmailVerification.objects.update_or_create(
            user=user,
            defaults={
                'otp': otp,
                'created_at': timezone.now(),
                'is_verified': False
            }
        )
        
        send_mail(
            'Your Verification Code',
            f'Your OTP is: {otp}\nValid for 5 minutes.',
            settings.DEFAULT_FROM_EMAIL,
            [user.email],
            fail_silently=False,
        )
        return Response({'message': 'OTP sent successfully'}, status=status.HTTP_200_OK)
    
    except User.DoesNotExist:
        return Response({'error': 'Email not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        logger.error(f"Failed to send OTP: {str(e)}")
        return Response(
            {'error': 'Failed to send OTP. Please try again.'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['POST'])
def verify_otp(request):
    """Verify OTP"""
    email = request.data.get('email', '').lower().strip()
    otp = request.data.get('otp', '').strip()
    
    if not email or '@' not in email:
        return Response({'error': 'Invalid email'}, status=status.HTTP_400_BAD_REQUEST)
    if not otp or len(otp) != 6 or not otp.isdigit():
        return Response({'error': 'Invalid OTP format'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.get(email=email)
        verification = EmailVerification.objects.filter(user=user).first()
        
        if not verification:
            return Response({'error': 'No OTP requested for this email'}, status=status.HTTP_400_BAD_REQUEST)
        if verification.otp != otp:
            return Response({'error': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)
        if verification.is_verified:
            return Response({'error': 'OTP already used'}, status=status.HTTP_400_BAD_REQUEST)
        if timezone.now() > verification.created_at + timedelta(minutes=5):
            return Response({'error': 'OTP expired'}, status=status.HTTP_400_BAD_REQUEST)
        
        verification.is_verified = True
        verification.save()
        return Response({'message': 'Email verified successfully'}, status=status.HTTP_200_OK)
        
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        logger.error(f"OTP verification failed: {str(e)}")
        return Response(
            {'error': 'Failed to verify OTP'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

       
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
        
        # Initialize result with all new categories set to 0
        result = {
            'abstract_art': 0,
            'sculpture': 0,
            'portrait_paintings': 0,
            'landscape_paintings': 0,
            'digital_art': 0,
            'painting_supplies': 0,
            'wall_decals': 0
        }

        # Map the queryset data to our new categories
        for item in queryset:
            category = item['product__category']
            if category == 'ABSTRACT':
                result['abstract_art'] = item['total_quantity']
            elif category == 'SCULPTURE':
                result['sculpture'] = item['total_quantity']
            elif category == 'PORTRAIT':
                result['portrait_paintings'] = item['total_quantity']
            elif category == 'LANDSCAPE':
                result['landscape_paintings'] = item['total_quantity']
            elif category == 'DIGITAL':
                result['digital_art'] = item['total_quantity']
            elif category == 'SUPPLIES':
                result['painting_supplies'] = item['total_quantity']
            elif category == 'DECAL':
                result['wall_decals'] = item['total_quantity']
        
        serializer = self.serializer_class(result)
        return Response(serializer.data)
    
class CountryDataViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = StoreSales.objects.all()
    serializer_class = CountryDataSerializer

    def list(self, request):
        queryset = StoreSales.objects.values('date__month') \
    .annotate(
        quantityBelgium=Sum(Case(When(country__name="Belgium", then='quantity'), default=0, output_field=IntegerField())),
        quantityChina=Sum(Case(When(country__name="China", then='quantity'), default=0, output_field=IntegerField())),
        quantityCzechia=Sum(Case(When(country__name="Czechia", then='quantity'), default=0, output_field=IntegerField())),
        quantityDenmark=Sum(Case(When(country__name="Denmark", then='quantity'), default=0, output_field=IntegerField())),
        quantityEngland=Sum(Case(When(country__name="England", then='quantity'), default=0, output_field=IntegerField())),
        quantityFrance=Sum(Case(When(country__name="France", then='quantity'), default=0, output_field=IntegerField())),
        quantityGermany=Sum(Case(When(country__name="Germany", then='quantity'), default=0, output_field=IntegerField())),
        quantityGreece=Sum(Case(When(country__name="Greece", then='quantity'), default=0, output_field=IntegerField())),
        quantityHungary=Sum(Case(When(country__name="Hungary", then='quantity'), default=0, output_field=IntegerField())),
        quantityIran=Sum(Case(When(country__name="Iran", then='quantity'), default=0, output_field=IntegerField())),
        quantityJapan=Sum(Case(When(country__name="Japan", then='quantity'), default=0, output_field=IntegerField())),
        quantityLithuania=Sum(Case(When(country__name="Lithuania", then='quantity'), default=0, output_field=IntegerField())),
        quantityNetherlands=Sum(Case(When(country__name="Netherlands", then='quantity'), default=0, output_field=IntegerField())),
        quantityPoland=Sum(Case(When(country__name="Poland", then='quantity'), default=0, output_field=IntegerField())),
        quantityRussia=Sum(Case(When(country__name="Russia", then='quantity'), default=0, output_field=IntegerField())),
        quantitySouthKorea=Sum(Case(When(country__name="South Korea", then='quantity'), default=0, output_field=IntegerField())),
        quantitySpain=Sum(Case(When(country__name="Spain", then='quantity'), default=0, output_field=IntegerField())),
        quantitySweden=Sum(Case(When(country__name="Sweden", then='quantity'), default=0, output_field=IntegerField())),
        quantityUSA=Sum(Case(When(country__name="USA", then='quantity'), default=0, output_field=IntegerField()))
    )
                   
        
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    

