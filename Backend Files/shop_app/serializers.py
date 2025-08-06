from rest_framework import serializers
from .models import Product, Cart, CartItem, Order, Payment
from django.contrib.auth import get_user_model

############## DASHBOARD ##############################
from .models import *
import calendar

###########################################################

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'slug', 'image', 'description', 'category', 'price']
        
class DetailedProductSerializer(serializers.ModelSerializer):
    similar_products = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'slug', 'image', 'description', 'similar_products']

    def get_similar_products(self, product):
        products = Product.objects.filter(category=product.category).exclude(id=product.id)
        serializer = ProductSerializer(products, many = True)
        return serializer.data
    
class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only = True)
    total = serializers.SerializerMethodField()
    class Meta:
        model = CartItem
        fields = ['id', 'quantity', 'product', 'total']

    def get_total(self, cartitem):
        price = cartitem.product.price * cartitem.quantity
        return price


class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(read_only = True, many = True)
    sum_total = serializers.SerializerMethodField()
    num_of_items = serializers.SerializerMethodField()
    
    class Meta:
        model = Cart
        fields = ['id', 'cart_code', 'items','sum_total', 'num_of_items', 'created_at', 'modified_at']
    
    def get_sum_total(self, cart):
        items = cart.items.all()
        total = sum([item.product.price * item.quantity for item in items])
        return total
    
    def get_num_of_items(self, cart):
        items = cart.items.all()
        total = sum([item.quantity for item in items])
        return total

class SimpleCartSerializer(serializers.ModelSerializer):
    num_of_items = serializers.SerializerMethodField()
    class Meta:
        model = Cart
        fields = ['id', 'cart_code', "num_of_items"]

    def get_num_of_items(self, cart):
        num_of_items = sum([item.quantity for item in cart.items.all()])
        return num_of_items 
    
class NewCartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    order_id = serializers.SerializerMethodField()
    order_date = serializers.SerializerMethodField()
    class Meta:
        model = CartItem
        fields = ['id', 'product', 'quantity', 'order_id', 'order_date']

    def get_order_id(self, cartitem):
        order_id = cartitem.cart.cart_code
        return order_id
    
    def get_order_date(self, cartitem):
        order_date = cartitem.cart.modified_at
        return order_date
    
class UserSerializer(serializers.ModelSerializer):
    items = serializers.SerializerMethodField()
    class Meta:
        model = get_user_model()
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'city', 'state', 'address', 'phone', 'items']

    def get_items(self,user):
        cartitems = CartItem.objects.filter(cart__user=user, cart__paid=True)[:10]
        serializer = NewCartItemSerializer(cartitems, many=True)
        return serializer.data

##################################################################################

# (cod)

class PaymentSerializer(serializers.ModelSerializer):
    order_number = serializers.CharField(source='order.order_number', read_only=True)
    status = serializers.SerializerMethodField()

    class Meta:
        model = Payment
        fields = ['id', 'order_number', 'is_paid', 'status', 'created_at']
        read_only_fields = ['id', 'created_at']

    def get_status(self, obj):
        return "Paid" if obj.is_paid else "Pending"

class OrderSerializer(serializers.ModelSerializer):
    payment = PaymentSerializer(read_only=True)
    class Meta:
        model = Order
        fields = '__all__'

##############################################################

#(dashboard)

class StoreSalesSerializer(serializers.ModelSerializer): 
    gender = serializers.SlugRelatedField(
        queryset=Gender.objects.all(), 
        slug_field='name'
    )

    country = serializers.SlugRelatedField(
        queryset=Country.objects.all(), 
        slug_field='name'
    )

    customertype = serializers.SlugRelatedField(
        queryset=CustomerType.objects.all(), 
        slug_field='name'
    )


    class Meta: 
        model = StoreSales
        fields = ('id', 'unit_price', 'quantity', 'date', 'country', 'gender', 'customertype', 'product')


class GenderDataSerializer(serializers.Serializer): 
    id = serializers.IntegerField(source='gender')
    label = serializers.CharField(source= 'gender__name')
    value = serializers.IntegerField(source='quantity')


class ProductCategoryDataSerializer(serializers.Serializer):
    category = serializers.CharField()
    abstract_art = serializers.IntegerField(default=0)
    sculpture = serializers.IntegerField(default=0)
    portrait_paintings = serializers.IntegerField(default=0)
    landscape_paintings = serializers.IntegerField(default=0)
    digital_art = serializers.IntegerField(default=0)
    painting_supplies = serializers.IntegerField(default=0)
    wall_decals = serializers.IntegerField(default=0)


class CountryDataSerializer(serializers.Serializer):
    date__month = serializers.CharField()
    quantityBelgium = serializers.IntegerField()
    quantityChina = serializers.IntegerField()
    quantityCzechia = serializers.IntegerField()
    quantityDenmark = serializers.IntegerField()
    quantityEngland = serializers.IntegerField()
    quantityFrance = serializers.IntegerField()
    quantityGermany = serializers.IntegerField()
    quantityGreece = serializers.IntegerField()
    quantityHungary = serializers.IntegerField()
    quantityIran = serializers.IntegerField()
    quantityJapan = serializers.IntegerField()
    quantityLithuania = serializers.IntegerField()
    quantityNetherlands = serializers.IntegerField()
    quantityPoland = serializers.IntegerField()
    quantityRussia = serializers.IntegerField()
    quantitySouthKorea = serializers.IntegerField()
    quantitySpain = serializers.IntegerField()
    quantitySweden = serializers.IntegerField()
    quantityUSA = serializers.IntegerField()
    month_name = serializers.SerializerMethodField()

    def get_month_name(self,obj):
        return calendar.month_name[obj['date__month']]


