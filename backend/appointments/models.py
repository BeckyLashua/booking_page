from django.db import models

class Appointment(models.Model):
    appt_id = models.AutoField(primary_key=True)
    client_first_name = models.CharField(max_length=255)
    client_last_name = models.CharField(max_length=255)
    client_phone = models.CharField(max_length=15)
    client_email = models.EmailField()
    appt_date = models.DateField()
    appt_time = models.TimeField()

    def __str__(self):
        return f"{self.client_first_name} {self.client_last_name} with email {self.client_email} on {self.appt_date} at {self.appt_time}"

    class Meta:
        db_table = 'appointment'