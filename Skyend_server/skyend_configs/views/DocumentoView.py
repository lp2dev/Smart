from django.shortcuts import render
from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from rest_framework import permissions
from ..models.Documento import Documento
from ..utils import SetPagination
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce
from rest_framework.response import Response


class DocumentoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Documento
#        fields = ('descripcion', 'nombre')


class DocumentoViewSet(viewsets.ModelViewSet):  # API REST
    queryset = Documento.objects.filter()
    serializer_class = DocumentoSerializer
    pagination_class = SetPagination
    #paginate_by = 3
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(descripcion__icontains=query),
                    Q(nombre__icontains=query)
                    )
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
