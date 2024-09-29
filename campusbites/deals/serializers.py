from rest_framework import serializers
from .models import Post
from .models import User
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        # all of the fields that you can get with the api
        fields = ['id', 'price', 'description', 'event_name', 'address',
                  'calorie_per_dollar', 'date_of_event', 'time_of_event']


