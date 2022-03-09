from django.urls import include, path
from .views import CustomerCreate, CustomerList, CustomerDetail, CustomerUpdate, CustomerDelete, SubscriberCreate, SubscriberList, SubscriberDetail, SubscriberUpdate, SubscriberDelete


urlpatterns = [
    path('create/', CustomerCreate.as_view(), name='customer-create'),
    path('list/', CustomerList.as_view(),name="customer-list"),
    path('detail/<int:pk>/', CustomerDetail.as_view(), name='customer-detail'),
    path('update/<int:pk>/', CustomerUpdate.as_view(), name='customer-update'),
    path('delete/<int:pk>/', CustomerDelete.as_view(), name='customer-delete'),


    # subscriber urls
    
    
    path('subscriber/create/', SubscriberCreate.as_view(), name='subscriber-create'),
    path('subscriber/list/', SubscriberList.as_view(),name="subscriber-list"),
    path('subscriber/detail/<int:pk>/', SubscriberDetail.as_view(), name='subscriber-detail'),
    path('subscriber/update/<int:pk>/', SubscriberUpdate.as_view(), name='subscriber-update'),
    path('subscriber/delete/<int:pk>/', SubscriberDelete.as_view(), name='subscriber-delete')

]
