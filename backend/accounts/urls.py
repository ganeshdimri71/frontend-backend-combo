from django.urls import include, path
from .views import RegisterCreate, RegisterList, CustomerUpdate, RegisterDelete,RegisterDetail


urlpatterns = [
    path('create/', RegisterCreate.as_view(), name='create-register'),
    path('list/', RegisterList.as_view()),
    path('update/<int:pk>/', CustomerUpdate.as_view(), name='update-customer'),
    path('delete/<int:pk>/', RegisterDelete.as_view(), name='delete-customer'),
    path('customer/<int:pk>/', RegisterDetail.as_view(), name='retrieve-customer'),
]
