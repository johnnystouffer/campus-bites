from decimal import Decimal
from datetime import date, time, datetime
from django.db import models

# Create your models here.
class Post(models.Model):
    """
    A specific post that gets added to our database.
    """

    # the price of the deal should be any from $0 to $99.99
    price = models.DecimalField(max_digits=4, decimal_places=2)

    # a description of the food that you can get
    description = models.CharField(max_length=40)

    # what is the event?
    event_name = models.CharField(max_length=25)

    # where is the event (make sure that this is presice)
    address = models.CharField(max_length=50)

    # the amount of calories per dollar
    calorie_per_dollar = models.DecimalField(max_digits=5, decimal_places=1)

    # date and time of the event 
    date_of_event = models.DateField()
    time_of_event = models.TimeField()

    # posted
    submission_time = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=False)
    
    cuisine = models.CharField(max_length=25)
    hosting_organization = models.CharField(max_length=25)
    charity = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.event_name} at {self.address}"
