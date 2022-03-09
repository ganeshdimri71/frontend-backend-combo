#Lib Imports
import imp
from rest_framework import generics
from django.shortcuts import render
from django.contrib import messages
from django.contrib.auth.models import User,auth

#Custom Imports
from .models import Customers,Subscribers
from .serializers import CustomerSerializer,SubscriberSerializer

# Customer Views.
class CustomerView:
    queryset = Customers.objects.all()
    serializer_class = CustomerSerializer

# API endpoint that allows creation of a new customer
class CustomerCreate(CustomerView,generics.CreateAPIView):
    pass
    
# API endpoint that fetches the list of all customers
class CustomerList(CustomerView,generics.ListAPIView):
    pass

# API endpoint that returns a single customer detail by pk (customer.id).
class CustomerDetail(CustomerView,generics.RetrieveAPIView):
    pass

# API endpoint that allows a customer record to be updated.
class CustomerUpdate(CustomerView,generics.RetrieveUpdateAPIView):
    pass

# API endpoint that allows a customer record to be deleted.
class CustomerDelete(CustomerView,generics.RetrieveDestroyAPIView):
    pass


# subscriber

# Subscriber Views.
class SubscriberView:
    queryset = Subscribers.objects.all()
    serializer_class = SubscriberSerializer

# API endpoint that allows creation of a new subscriber
class SubscriberCreate(SubscriberView,generics.CreateAPIView):
    pass
    
# API endpoint that fetches the list of all subscriber
class SubscriberList(SubscriberView,generics.ListAPIView):
    pass

# API endpoint that returns a single subscriber detail by pk (subscriber.id).
class SubscriberDetail(SubscriberView,generics.RetrieveAPIView):
    pass

# API endpoint that allows a subscriber record to be updated.
class SubscriberUpdate(SubscriberView,generics.RetrieveUpdateAPIView):
    pass

# API endpoint that allows a subscriber record to be deleted.
class SubscriberDelete(SubscriberView,generics.RetrieveDestroyAPIView):
    pass