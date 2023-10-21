from django.urls import path
from rest_framework.routers import DefaultRouter
from .view import BlogViewSet
from .view import ProjectViewSet


blog_router = DefaultRouter()
blog_router.register(r'blogs', BlogViewSet)
project_router = DefaultRouter()
project_router.register(r'project', ProjectViewSet)