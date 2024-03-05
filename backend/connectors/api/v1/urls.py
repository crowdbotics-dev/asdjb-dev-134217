from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import efergtrynViewSet

router = DefaultRouter()
router.register("efergtryn", efergtrynViewSet, basename="efergtryn")

urlpatterns = [
    path("connectors/", include(router.urls)),
]
