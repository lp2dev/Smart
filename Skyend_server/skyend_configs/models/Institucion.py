# _*_ coding: utf-8 _*_
from django.db import models
from .JerarquiaAcad import JerarquiaAcad


class Institucion(models.Model):

    nombre = models.CharField(max_length=60)
    abrev = models.CharField(max_length=10, null=True, blank=True)
    codigo = models.CharField(max_length=10, null=True, blank=True)
    estructura_validada = models.BooleanField(default=False)

    jerarquia_acad = models.ForeignKey(
        JerarquiaAcad, related_name="institucion_set", null=True, blank=True)

    class Meta:
        verbose_name = "Institución"
        verbose_name_plural = "Instituciones"

    def __str__(self):
        return self.abrev
