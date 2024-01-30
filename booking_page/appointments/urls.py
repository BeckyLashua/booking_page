from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AppointmentViewSet
from .views import MockAppointmentAPIView 

router = DefaultRouter()
router.register(r'appointments', AppointmentViewSet)  

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/mock-appointments/', MockAppointmentAPIView.as_view(), name='mock-appointments'),  
]