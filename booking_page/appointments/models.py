from django.db import models

class Appointment(models.Model):
    appt_id = models.IntegerField(primary_key=True)cd 
    client_first_name = models.CharField(max_length=100)
    client_last_name = models.CharField(max_length=100)
    client_phone = models.CharField(max_length=15)
    client_email = models.EmailField()
    appt_date = models.DateField()
    appt_time = models.TimeField()

    def __str__(self):
        return f"{self.firstname} {self.lastname} with email {self.email} on {self.date} at {self.time}"
