from django.urls import path, include
from rest_framework.routers import DefaultRouter
#from .views import PostView
from . import views

router = DefaultRouter()
#router.register(r'deals', PostView, 'deal')

urlpatterns = [
    
    path('', views.getData),
    path('create/', views.createPost) 
]