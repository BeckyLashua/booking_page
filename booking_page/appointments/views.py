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
    '''
    
class MockAppointmentAPIView(APIView):
    def get(self, request, *args, **kwargs):
        # Mock appointment data
        mock_appointments = [
            {'appt_id': 1, 'appt_date': '2024-01-10', 'appt_time': '08:05:06', 'client_email': 'user1@example.com'},
            # Add more mock appointments as needed
        ]
        email = request.GET.get('email', None)

        if email is not None:
            # Search for the appointment by email
            try:
                appointment = Appointment.objects.get(client_email=email)
                # Prepare the data to send back
                data = {
                    'appt_id': appointment.appt_id,
                    #'client_first_name': appointment.client_first_name,
                    #'client_last_name': appointment.client_last_name,
                    #'client_phone': appointment.client_phone,
                    'client_email': appointment.client_email,
                    'appt_date': appointment.appt_date,
                    'appt_time': appointment.appt_time,
                }
                return JsonResponse(data, safe=False)
            except Appointment.DoesNotExist:
                return JsonResponse({'error': 'Appointment not found'}, status=404)
        else:
            return JsonResponse({'error': 'Email parameter is required'}, status=400)
            
            '''