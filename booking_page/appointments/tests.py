from django.test import TestCase

# Create your tests here.
from .models import Appointment
from rest_framework.test import APIClient
from rest_framework import status

class AppointmentTestCase(TestCase):
    def setUp(self):
        # Set up data for the whole TestCase
        Appointment.objects.create(
            client_first_name="John",
            client_last_name="Doe",
            client_email="johndoe@gmail.com",
            client_phone="1234567890",
            appt_date="2021-01-01",
            appt_time="10:00:00"
        )

    def test_appointment_creation(self):
        """Test the appointment model can create an appointment."""
        appointment = Appointment.objects.get(client_first_name="John")
        self.assertEqual(appointment.client_last_name, "Doe")

    def test_view_get(self):
        """Test the API view for getting appointment list."""
        client = APIClient()
        response = client.get('/api/appointments/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_appointment(self):
        client = APIClient()
        response = client.post('/api/appointments/', {
            'client_first_name': 'Jane',
            'client_last_name': 'Smith',
            'client_email': 'janesmith@example.com',
            'client_phone': '0987654321',
            'appt_date': '2021-01-02',
            'appt_time': '11:00:00'
    })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Appointment.objects.count(), 2) 
        self.assertEqual(Appointment.objects.last().client_last_name, 'Smith')

      # Will add more tests later