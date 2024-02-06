from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from .models import Appointment
from .serializers import AppointmentSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    @action(detail=False, methods=['GET'])
    def get_appointment_by_email(request):
        # Get the email from request parameters
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

  
class MockAppointmentAPIView(APIView):
    def get(self, request, *args, **kwargs):
        # Mock appointment data
        mock_appointments = [
            {'appt_id': 1, 'appt_date': '2024-01-10', 'appt_time': '08:05:06', 'client_email': 'user1@example.com'},
            # Add more mock appointments as needed
        ]
        return Response(mock_appointments)  # Return the mock data as a JSON response 