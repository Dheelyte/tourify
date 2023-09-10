from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .serializers import UserSerializer
from .models import CustomUser

User = get_user_model()

class UserView(APIView):
    def get(self, request, id):
        try:
            user = User.objects.get(id=id)
        except User.DoesNotExist:
            return Response({"error": "Usser does not exist"})
        serializer = UserSerializer(user)
        return Response(serializer.data, status=200)

