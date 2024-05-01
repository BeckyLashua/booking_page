from rest_framework import serializers
from .models import Appointment

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = [
                  'appt_id', 
                  'client_first_name', 
                  'client_last_name', 
                  'client_email',
                  'client_phone',
                  'appt_date',
                  'appt_time'
                  ]  
        
class AppointmentUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ('appt_date', 'appt_time')  
