from django.urls import path
from .views import GetPlaceInfo

urlpatterns = [
    path('get-place-info/', GetPlaceInfo.as_view()),
    # path('create/', CreateExplore.as_view(), name='create-explore'),
    # path('<slug:slug>/', GetExplore.as_view(), name='explores'),
]