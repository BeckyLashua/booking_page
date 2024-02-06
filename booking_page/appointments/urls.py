from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AppointmentViewSet
from .views import MockAppointmentAPIView 
from .views import get_appointment_by_email

router = DefaultRouter()
router.register(r'appointments', AppointmentViewSet)  

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/get-appointment/', get_appointment_by_email, name='get_appointment_by_email'),
    path('api/mock-appointments/', MockAppointmentAPIView.as_view(), name='mock-appointments'),  
]