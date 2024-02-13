from django.shortcuts import render
from django_filters import rest_framework as filters
from django.shortcuts import get_object_or_404

# Create your views here.
from rest_framework import viewsets, status, generics
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from .models import Appointment
from .serializers import AppointmentSerializer, AppointmentUpdateSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    @action(detail=False, methods=['get'], url_path='by-email/(?P<email>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})')
    def by_email(self, request, email=None):
        instance = get_object_or_404(Appointment, client_email=email)
        serializer = self.serializer_class(instance)
        return Response(serializer.data)


    @action(detail=False, methods=['patch'], url_path='update-by-email/(?P<email>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})')
    def update_by_email(self, request, email=None):
        appointment = get_object_or_404(Appointment, client_email=email)
        
        # Use a serializer to validate and update the requested fields (e.g., appt_date and appt_time)
        serializer = AppointmentUpdateSerializer(appointment, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['delete'], url_path='delete-by-email/(?P<email>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})')
    def update_by_email(self, request, email=None):
        appointment = get_object_or_404(Appointment, client_email=email)
        
        # Use a serializer to validate and update the requested fields (e.g., appt_date and appt_time)
        serializer = AppointmentUpdateSerializer(appointment, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    @action(detail=False, methods=['delete'], url_path='cancel-by-email/(?P<email>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})')
    def cancel_by_email(self, request, email=None):
        appointment = get_object_or_404(Appointment, client_email=email)
        appointment.delete()
        return Response({'message': 'Appointment canceled successfully'}, status=status.HTTP_204_NO_CONTENT)