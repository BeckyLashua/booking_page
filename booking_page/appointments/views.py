from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Appointment
from .serializers import AppointmentSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    @action(detail=False, methods=['get'])
    def by_email(self, request):
        email = request.GET.get('email', None)
        if email:
            appointment = Appointment.objects.filter(email=email).first()
            if appointment:
                serializer = self.get_serializer(appointment)
                return Response(serializer.data)
            return Response({'error': 'There exist no appointments with this email'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'error': 'Email parameter is missing'}, status=status.HTTP_400_BAD_REQUEST)
  
class MockAppointmentAPIView(APIView):
    def get(self, request, *args, **kwargs):
        # Mock appointment data
        mock_appointments = [
            {'appt_id': 1, 'appt_date': '2024-01-10', 'appt_time': '08:05:06', 'client_email': 'user1@example.com'},
            # Add more mock appointments as needed
        ]
        return Response(mock_appointments)  # Return the mock data as a JSON response 