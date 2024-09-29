# Generated by Django 5.1.1 on 2024-09-29 04:39

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('deals', '0002_post_approved'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='charity',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='post',
            name='cuisine',
            field=models.CharField(default='No cuisine provided', max_length=25),
        ),
        migrations.AddField(
            model_name='post',
            name='hosting_organization',
            field=models.CharField(default='No hosting organization provided', max_length=25),
        ),
        migrations.AddField(
            model_name='post',
            name='latitude',
            field=models.DecimalField(decimal_places=6, default=0, max_digits=9),
        ),
        migrations.AddField(
            model_name='post',
            name='longitude',
            field=models.DecimalField(decimal_places=6, default=0, max_digits=9),
        ),
        migrations.AlterField(
            model_name='post',
            name='address',
            field=models.CharField(default='No address provided', max_length=50),
        ),
        migrations.AlterField(
            model_name='post',
            name='calorie_per_dollar',
            field=models.DecimalField(decimal_places=1, default=0, max_digits=5),
        ),
        migrations.AlterField(
            model_name='post',
            name='date_of_event',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AlterField(
            model_name='post',
            name='description',
            field=models.CharField(default='No description provided', max_length=40),
        ),
        migrations.AlterField(
            model_name='post',
            name='event_name',
            field=models.CharField(default='No event name provided', max_length=25),
        ),
        migrations.AlterField(
            model_name='post',
            name='price',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=4),
        ),
        migrations.AlterField(
            model_name='post',
            name='time_of_event',
            field=models.TimeField(default=datetime.time(12, 0)),
        ),
    ]
