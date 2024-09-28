from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostView

router = DefaultRouter()
router.register(r'deals', PostView, 'deal')

urlpatterns = [
    path('', include(router.urls))
]