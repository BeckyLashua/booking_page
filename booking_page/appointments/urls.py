from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from .views import AppointmentViewSet
#from .views import MockAppointmentAPIView 
#from .views import AppointmentByEmail

router = DefaultRouter()
router.register(r'appointments', AppointmentViewSet)  

urlpatterns = [
    path('', include(router.urls)),
    #re_path(r'^appointments/(?P<email>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})/$', AppointmentViewSet.as_view(), name='appt-by-email'),

    #path('api/get-appointment/', MockAppointmentAPIView.as_view(), name='get_appointment_by_email'),
    #path('api/mock-appointments/', MockAppointmentAPIView.as_view(), name='mock-appointments'),  
]