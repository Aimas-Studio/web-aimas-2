from rest_framework.viewsets import ModelViewSet
from ..models import Blog
from ..models import Project
from .serializer import BlogSerializer
from .serializer import ProjectSerializer


class BlogViewSet(ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    
class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    