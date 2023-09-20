import requests
import base64
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# from django.contrib.auth import get_user_model
# from .models import Explore
# from .serializers import ExploreSerializer

# User = get_user_model()

class GetPlaceInfo(APIView):
    
    def post(self, request):
        api_key = "AIzaSyASRxkFuU7msiv43q1j0JZQIlX5du_oaWU"

        try:
            keyword = request.data.get('keyword')
            lat = request.data.get('lat')
            lon = request.data.get('lon')
        except:
            Response(status.HTTP_400_BAD_REQUEST)
        
        
        api = f"https://maps.googleapis.com/maps/api/place/textsearch/json?query={keyword}&radius=1000&location={lat},{lon}&key=AIzaSyASRxkFuU7msiv43q1j0JZQIlX5du_oaWU"

        try:
            response = requests.get(api)
            response.raise_for_status()
            places = response.json()
            
            for key in places["results"]:
                if "photos" in key:
                    for photo_info in key["photos"]:
                        photo_reference = photo_info["photo_reference"]

                    photo_api = f"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference={photo_reference}&key={api_key}"
                    
                    photo_request = requests.get(photo_api)
                    photo_request.raise_for_status()

                    # Encode the binary image data as Base64
                    photo_data = base64.b64encode(photo_request.content).decode('utf-8')
                else:
                    photo_data = None
                key["photo_data"] = photo_data

            return Response({"places": places}, status=status.HTTP_200_OK)
        except requests.exceptions.RequestException:
            return Response(status.HTTP_500_INTERNAL_SERVER_ERROR)


"""
class GetExplore(APIView):
    def get(self, request, slug):
        user = User.objects.get(slug=slug)
        explores = Explore.objects.filter(user=user)
        serializer = ExploreSerializer(explores, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CreateExplore(APIView):
    def post(self, request):
        user_id = request.data.get('user')
        user = User.objects.get(id=user_id)
        serializer = ExploreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=user)
            return Response(serializer.data)
        return Response(serializer.errors)
"""