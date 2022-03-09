from datetime import datetime
from django.db import models

# Create your models here.

  
class Customers(models.Model):
    fullName = models.CharField("name" ,max_length=240)
    email = models.CharField("email",max_length=240, unique=True)
    mobile = models.CharField("mobile", max_length=240, unique=True)
    password = models.CharField("password", max_length=240)
    ipaddr = models.CharField("ipaddress",max_length=50,default="0.0.0.0")
    createdOn = models.DateTimeField("createdon",null=True, blank=True)

    def __str__(self):
        return self.fullName

CREATED_MODE = (
    ("1", "Online"),
    ("2", "Offline"),
)

CREATED_BY = (
    ("1", "Manual"),
    ("2", "Online"),
)
class Subscribers(models.Model):
    ID = models.IntegerField("subId")
    cusID = models.IntegerField("cusId")
    planCode = models.CharField("plancode" ,max_length=50)
    startDate = models.DateTimeField("startdate")
    endDate =  models.DateTimeField("endDate")
    isActive = models.BooleanField("isactive")
    createdOn = models.DateTimeField("createdon")
    createdMode = models.CharField(
        "createdmode",
        max_length = 20,
        choices = CREATED_MODE,
        )
    createdBy = models.CharField(
        "createdby",
        max_length = 20,
        choices = CREATED_BY,
        )
    payMode = models.CharField("paymode",max_length=1)
    payNarration = models.CharField("paynarration" ,max_length=500)
    comments = models.CharField("comments" ,max_length=500)




