from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('products', views.products, name='products'),
    path('product_detail/<slug:slug>', views.product_detail, name="product_detail"),
    path('add_item/', views.add_item, name = 'add_item'),
    path('product_in_cart', views.product_in_cart, name = 'product_in_cart'),
    path('get_cart_stat', views.get_cart_stat, name = 'get_cart_stat'),
    path('get_cart', views.get_cart, name = "get_cart"),
    path('update_quantity/', views.update_quantity, name = 'update_quantity'),
    path('delete_cartitem/', views.delete_cartitem, name = 'delete_cartitem'),
    path('get_username', views.get_username, name = "get_username"),
    path('user_info', views.user_info, name = 'user_info'),
    path('create_order/', views.create_order, name='create_order'),
    path('send_otp/', views.send_otp, name = 'send_otp'),
    path('verify_otp/', views.verify_otp, name = 'verify_otp'),

    ############## DASHBOARD ##############################

    path('storesales', views.StoreSales, name = 'storesales'),
    path('genderdata', views.GenderData, name = 'genderdata'),
    path('productdata',views.productdata, name='productdata'),
    path('countrydata', views.CountryData, name = 'countrydata'),
]

#fetching all_products: http://127.0.0.1:8001/products/



