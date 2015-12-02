from django.shortcuts import render
from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from rest_framework import permissions
from ..models.UnidadMedida import UnidadMedida
from ..utils import SetPagination
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce
from rest_framework.response import Response


class UnidadMedidaSerializer(serializers.ModelSerializer):

    class Meta:
        model = UnidadMedida
        #fields = ('url', 'abrev', 'descr')


class UnidadMedidaViewSet(viewsets.ModelViewSet):  # API REST
    queryset = UnidadMedida.objects.filter()
    serializer_class = UnidadMedidaSerializer
    pagination_class = SetPagination
    #paginate_by = 3
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(codigo__icontains=query),
                    Q(nombre__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
