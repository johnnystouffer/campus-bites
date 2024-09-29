from django.urls import path
from .views import gpt_request

urlpatterns = [
    path('', gpt_request, name = 'gpt_request')
]