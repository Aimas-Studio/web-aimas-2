from django.urls import path
from rest_framework.routers import DefaultRouter
from .view import BlogViewSet

blog_router = DefaultRouter()
blog_router.register(r'blogs', BlogViewSet)