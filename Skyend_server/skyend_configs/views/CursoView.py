from django.shortcuts import render
from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from rest_framework import permissions
from ..models.Curso import Curso
from ..utils import SetPagination
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce
from rest_framework.response import Response


class CursoSerializer(serializers.ModelSerializer):
    contrato_numero = serializers.ReadOnlyField(
        source='contrato.numero')

    class Meta:
        model = Curso
        #fields = ('url', 'abrev', 'descr')


class CursoViewSet(viewsets.ModelViewSet):  # API REST
    queryset = Curso.objects.filter()
    serializer_class = CursoSerializer
    pagination_class = SetPagination
    #paginate_by = 3
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(numero__icontains=query),
        			Q(nombre__icontains=query),
                    Q(fecha_inicio__icontains=query),
        		    Q(fecha_fin__icontains=query),
        		    Q(codigo__icontains=query),
                    Q(contrato__icontains=query))
                    
        queryset = self.queryset.filter()
        return queryset
