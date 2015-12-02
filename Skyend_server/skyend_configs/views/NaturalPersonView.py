from django.shortcuts import render
from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from rest_framework import permissions
from ..models.NaturalPerson import NaturalPerson


class NaturalPersonSerializer(serializers.ModelSerializer):

    class Meta:
        model = NaturalPerson
        #fields = ('url', 'abrev', 'descr')


class NaturalPersonViewSet(viewsets.ModelViewSet):  # API REST
    queryset = NaturalPerson.objects.filter()
    serializer_class = NaturalPersonSerializer
    #permission_classes = [permissions.IsAuthenticated]
