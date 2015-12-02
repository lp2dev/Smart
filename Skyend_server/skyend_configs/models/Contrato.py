from django.db import models
from .Documento import Documento
CONTRATO_TIPO_CHOISES = (
    ('CURSO', 'CURSOS'),
)


class Contrato(models.Model):

    numero = models.CharField(max_length=10, null=True, blank=True)
    fecha_inicio = models.DateField(max_length=60)
    fecha_fin = models.DateField(max_length=60)
    documento = models.CharField(max_length=20, null=True)
    #documentos = models.ForeignKey(Documento, null=True, blank=True)
    documentos = models.ManyToManyField(Documento, null=True, blank=True)

    #documentos = models.ManyToManyField(Documento, related_name='contrato_set', null=True, blank=True)
    #documentos = models.OneToOneField(Documento, null=True, blank=True)
    #documentos = models.OneToManyField(Documento, null=True, blank=True)
    #documentos = models.ManyToManyField(Documento, related_name='contrato_set' null=True, blank=True)

    estado = models.BooleanField(default=True,)

    class Meta:
        verbose_name = "Contrato"
        verbose_name_plural = "Contratos"

       # def get_document(self):
        #return "".join([str(p) for p in self.documentos.all()])

    def __str__(self):
        return self.numero
