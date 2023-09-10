from . import views
from django.urls import path
from . import views

urlpatterns = [
    path('user/<int:id>/', views.UserView.as_view(), name='user'),
]