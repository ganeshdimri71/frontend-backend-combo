from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import Customers, Subscribers



class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customers
        fields = ['id','fullName', 'email', 'mobile', 'password']

class SubscriberSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subscribers
        fields = ['ID','cusID','planCode','startDate','endDate','isActive','createdOn','createdMode','createdBy','payMode','payNarration','comments']