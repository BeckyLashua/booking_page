from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from .views import AppointmentViewSet

router = DefaultRouter()
router.register(r'appointments', AppointmentViewSet)  

urlpatterns = [
    path('', include(router.urls)),
]