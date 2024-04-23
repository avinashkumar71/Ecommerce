from django.urls import path
from .views import UserAuthView, UserAuthLogin

urlpatterns = [
    path('',UserAuthView.as_view()),
    path('login',UserAuthLogin.as_view()),
]