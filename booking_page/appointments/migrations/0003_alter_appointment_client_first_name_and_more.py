# Generated by Django 5.0.1 on 2024-02-06 18:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appointments', '0002_alter_appointment_appt_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='client_first_name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='client_last_name',
            field=models.CharField(max_length=255),
        ),
    ]
