from rest_framework.serializers import ModelSerializer
from ..models import Blog
from ..models import Project

class BlogSerializer(ModelSerializer):
    class Meta:
        model = Blog
        fields = ('id', 'title', 'body', 'image')
    
class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'body', 'image', 'type', 'site', 'url')
        