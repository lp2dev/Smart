from django.shortcuts import render
from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from rest_framework import permissions
from ..models.Contrato import Contrato
from ..utils import SetPagination
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce
from rest_framework.response import Response
from .DocumentoView import DocumentoSerializer


class ContratoSerializer(serializers.ModelSerializer):
    #documento_nombre = serializers.ReadOnlyField(
        #source='documentos.nombre')
    documentos = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Contrato
        #fields = ('url', 'abrev', 'descr')


class ContratoViewSet(viewsets.ModelViewSet):  # API REST
    queryset = Contrato.objects.filter()
    serializer_class = ContratoSerializer
    pagination_class = SetPagination
    #paginate_by = 3
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        query = self.request.query_params.get('query','')
        queryall = (Q(numero__icontains=query),
                    Q(fecha__inicio__icontains=query))
        queryall = (Q(fecha_fin__icontains=query),
                    Q(documentos__icontains=query),
                    Q(documento__icontains=query))
        queryset = self.queryset.filter()
        return queryset
