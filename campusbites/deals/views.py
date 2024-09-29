from django.shortcuts import render
from rest_framework import viewsets, permissions, response
from rest_framework.decorators import api_view, permission_classes
from .models import Post, User
from .serializers import PostSerializer, MyTokenObtainPairSerializer, RegisterSerializer, ProfileSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import generics

# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def getData(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return response.Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createPost(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return response.Response(serializer.data)
    return response.Response(serializer.erroros, stats = 400)

    


''''
class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.filter(approved=True)
    serializer_class = PostSerializer

    def get_permissions(self):
        if self.action == 'create':
            # Only allow signed in users to create deals
            return [permissions.IsAuthenticated()]
        elif self.action in ['update', 'partial_update', 'destroy']:
            # Optionally, restrict update and delete actions
            return [permissions.IsAdminUser()]
        else:
            # Allow read-only access to anyone
            return [permissions.AllowAny()]
'''