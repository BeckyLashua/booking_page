from django.db import models

class Appointment(models.Model):
    appt_id = models.IntegerField(primary_key=True)
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    date = models.DateField()
    time = models.TimeField()

    def __str__(self):
        return f"{self.firstname} {self.lastname} with email {self.email} on {self.date} at {self.time}"
