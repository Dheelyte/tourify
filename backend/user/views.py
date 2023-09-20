from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .serializers import UserSerializer
from .models import CustomUser

User = get_user_model()

class GetUser(APIView):
    def get(self, request, slug):
        try:
            user = User.objects.get(slug=slug)
        except User.DoesNotExist:
            return Response({"error": "User does not exist"})
        serializer = UserSerializer(user)
        return Response(serializer.data, status=200)
    
class CreateUser(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class LoginView(APIView):
    def post(self, request):
        
        return Response()