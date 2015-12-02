from django.conf.urls import patterns, include, url
from rest_framework import routers
from .views.NaturalPersonView import NaturalPersonViewSet
from .views.UnidadMedidaView import UnidadMedidaViewSet
from .views.ContratoView import ContratoViewSet
from .views.DocumentoView import DocumentoViewSet
from .views.CursoView import CursoViewSet

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()

router.register(r'unidadmedidas', UnidadMedidaViewSet)
router.register(r'naturalpersons', NaturalPersonViewSet)
router.register(r'contratos', ContratoViewSet)
router.register(r'documentos', DocumentoViewSet)
router.register(r'cursos', CursoViewSet)


urlpatterns = patterns(
    '',
    url(r'^', include(router.urls)),

)
