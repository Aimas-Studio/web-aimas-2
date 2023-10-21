from rest_framework.routers import DefaultRouter
from projects.api.urls import blog_router
from projects.api.urls import project_router
from django.urls import path, include

router = DefaultRouter()
#blogs
router.registry.extend(blog_router.registry)
router.registry.extend(project_router.registry)
print(include(router.urls))
urlpatterns = [
     path('', include(router.urls))
]