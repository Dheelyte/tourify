from rest_framework import serializers
from .models import Explore

class ExploreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Explore
        fields = ('name', 'location', 'image_url', 'user',)
