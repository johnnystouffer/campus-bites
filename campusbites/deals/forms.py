from django import forms
from .models import Post


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['price', 'description', 'event_name', 'address', 'calorie_per_dollar', 'date_of_event', 'time_of_event']
        

