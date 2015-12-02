from django.contrib import admin
from .models.JerarquiaAcad import JerarquiaAcad
from .models.Institucion import Institucion
from .models.Facultad import Facultad
from .models.Escuela import Escuela
from .models.Carrera import Carrera
from .models.Contrato import Contrato
from .models.Documento import Documento
from .models.Curso import Curso

class JerarquiaAcadAdmin(admin.ModelAdmin):
    list_display = ("tipo", "institucion", "parent")


class InstitucionAdmin(admin.ModelAdmin):
    list_display = ("jerarquia_acad", "nombre", "abrev", "codigo")
    search_fields = ("nombre", "abrev", "codigo")
    list_per_page = 2


class FacultadAdmin(admin.ModelAdmin):
    list_display = ("jerarquia_acad", "nombre", "abrev", "codigo")
    search_fields = ("nombre", "abrev", "codigo")


class EscuelaAdmin(admin.ModelAdmin):
    list_display = ("jerarquia_acad", "nombre", "abrev", "codigo")
    search_fields = ("nombre", "abrev", "codigo")


class CarreraAdmin(admin.ModelAdmin):
    list_display = ("jerarquia_acad", "nombre", "abrev", "codigo")
    search_fields = ("nombre", "abrev", "codigo")

#class ContratoAdmin(admin.ModelAdmin):
 #   list_display = ("documentos_set","numero", "fecha_inicio", "fecha_fin","documento")
  #  search_fields = ("documentos_set","numero", "fecha_inicio", "fecha_fin", "documento")
class ContratoAdmin(admin.ModelAdmin):
    list_display = ("numero", "fecha_inicio", "fecha_fin","documento", "id" ) #"get_document")
    search_fields = ("numero", "fecha_inicio", "fecha_fin", "documento", "id")

class DocumentoAdmin(admin.ModelAdmin):
    list_display = ("descripcion", "nombre")
    search_fields = ("descripcion", "nombre")

class CursoAdmin(admin.ModelAdmin):
    list_display = ("contrato", "numero", "nombre", "fecha_inicio", "fecha_fin","codigo",)
    search_fields = ("contrato", "numero", "nombre", "fecha_inicio", "fecha_fin", "codigo")

#class CursoAdmin(admin.ModelAdmin):
 #   list_display = ("curso", "numero", "nombre", "fecha_inicio", "fecha_fin","codigo")
  #  search_fields = ("curso", "numero", "nombre", "fecha_inicio", "fecha_fin", "codigo")

admin.site.register(JerarquiaAcad, JerarquiaAcadAdmin)
admin.site.register(Institucion, InstitucionAdmin)
admin.site.register(Facultad, FacultadAdmin)
admin.site.register(Escuela, EscuelaAdmin)
admin.site.register(Carrera, CarreraAdmin)
admin.site.register(Contrato, ContratoAdmin)
admin.site.register(Documento, DocumentoAdmin)
admin.site.register(Curso, CursoAdmin)