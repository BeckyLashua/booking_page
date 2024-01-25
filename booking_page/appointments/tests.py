from django.test import TestCase

# Create your tests here.
from .models import Appointment
from rest_framework.test import APIClient
from rest_framework import status

class AppointmentTestCase(TestCase):
    def setUp(self):
        # Set up data for the whole TestCase
        Appointment.objects.create(
            firstname="John",
            lastname="Doe",
            email="johndoe@gmail.com",
            phone="1234567890",
            date="2021-01-01",
            time="10:00:00"
        )

    def test_appointment_creation(self):
        """Test the appointment model can create an appointment."""
        appointment = Appointment.objects.get(firstname="John")
        self.assertEqual(appointment.lastname, "Doe")

    def test_view_get(self):
        """Test the API view for getting appointment list."""
        client = APIClient()
        response = client.get('/api/appointments/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_appointment(self):
        client = APIClient()
        response = client.post('/api/appointments/', {
            'firstname': 'Jane',
            'lastname': 'Smith',
            'email': 'janesmith@example.com',
            'phone': '0987654321',
            'date': '2021-01-02',
            'time': '11:00:00'
    })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Appointment.objects.count(), 2) 
        self.assertEqual(Appointment.objects.last().lastname, 'Smith')