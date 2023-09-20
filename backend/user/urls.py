from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.CreateUser.as_view(), name='create-user'),
    path('<slug:slug>/', views.GetUser.as_view(), name='user-detail'),
]