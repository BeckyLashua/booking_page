from rest_framework import serializers
from .models import Appointment

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = [
                  'id', 
                  'firstname', 
                  'lastname', 
                  'email',
                  'phone',
                  'date',
                  'time'
                  ]  
        

