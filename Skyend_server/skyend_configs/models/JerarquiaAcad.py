# _*_ coding: utf-8 _*_
from django.db import models


# Create your models here.

JERARQUIA_ACAD_TIPO_CHOISES = (
    ('INSTITUCION', 'INSTITUCION'),
    ('FACULTAD', 'FACULTAD'),
    ('ESCUELA', 'ESCUELA'),
    ('CARRERA', 'CARRERA'),
    ('DEPARTAMENTO', 'DEPARTAMENTO'),
)


class JerarquiaAcad(models.Model):
    tipo = models.CharField(max_length=30, choices=JERARQUIA_ACAD_TIPO_CHOISES)
    institucion = models.ForeignKey('Institucion',  null=True, blank=True)
    parent = models.ForeignKey("self", null=True, blank=True)

    class Meta:
        verbose_name = "JerarquiaAcad"
        verbose_name_plural = "JerarquiaAcads"

    def __str__(self):
        return self.tipo
