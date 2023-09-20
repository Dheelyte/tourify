from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Explore(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=256)
    location = models.CharField(max_length=256)
    image_url = models.URLField(max_length=256)

    def __str__(self):
        return self.name