from django.db import models

DOCUMENTO_TIPO_CHOISES = (
    ('CONTRATO', 'CONTRATOS'),
)


class Documento(models.Model):

    descripcion = models.CharField(max_length=10, null=True, blank=True)
    nombre = models.CharField(max_length=60)
    estado = models.BooleanField(default=True)

    test_date = models.DateTimeField(null=True, blank=True)
    test_number = models.FloatField(null=True, blank=True)
    # test_image = models.ImageField(upload_to='test_images',
    #                               default='test_images/default.png',
    #                               null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Documento"
        verbose_name_plural = "Documentos"

    def __str__(self):
        return self.nombre
