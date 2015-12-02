from django.db import models
from .Contrato import Contrato



class Curso(models.Model):

    numero = models.CharField(max_length=30, null=True, blank=True)
    nombre = models.CharField(max_length=30, null=True, blank=True)
    fecha_inicio = models.DateField(max_length=60)
    fecha_fin = models.DateField(max_length=60)
    codigo = models.CharField(max_length=30, null=True, blank=True)
    contrato = models.ForeignKey(Contrato, null=True, blank=True)
    #documentos = models.ManyToManyField(Documento, null=True, blank=True)
    #documentos = models.OneToOneField(Documento, null=True, blank=True)
    #documentos = models.OneToManyField(Documento, null=True, blank=True)
    #documentos = models.ManyToManyField(Documento, related_name='contrato_set' null=True, blank=True)

    estado = models.BooleanField(default=True,)

    class Meta:
        verbose_name = "Curso"
        verbose_name_plural = "Cursos"

    def __str__(self):
        return self.nombre
