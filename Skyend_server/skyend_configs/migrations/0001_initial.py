# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Carrera',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True, serialize=False)),
                ('nombre', models.CharField(max_length=60)),
                ('abrev', models.CharField(null=True, blank=True, max_length=10)),
                ('codigo', models.CharField(null=True, blank=True, max_length=10)),
            ],
            options={
                'verbose_name': 'Carrera',
                'verbose_name_plural': 'Carreras',
            },
        ),
        migrations.CreateModel(
            name='Contrato',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True, serialize=False)),
                ('numero', models.CharField(null=True, blank=True, max_length=10)),
                ('fecha_inicio', models.DateField(max_length=60)),
                ('fecha_fin', models.DateField(max_length=60)),
                ('documento', models.CharField(null=True, max_length=20)),
                ('estado', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'Contrato',
                'verbose_name_plural': 'Contratos',
            },
        ),
        migrations.CreateModel(
            name='Curso',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True, serialize=False)),
                ('numero', models.CharField(null=True, blank=True, max_length=30)),
                ('nombre', models.CharField(null=True, blank=True, max_length=30)),
                ('fecha_inicio', models.DateField(max_length=60)),
                ('fecha_fin', models.DateField(max_length=60)),
                ('codigo', models.CharField(null=True, blank=True, max_length=30)),
                ('estado', models.BooleanField(default=True)),
                ('contrato', models.ForeignKey(blank=True, to='skyend_configs.Contrato', null=True)),
            ],
            options={
                'verbose_name': 'Curso',
                'verbose_name_plural': 'Cursos',
            },
        ),
        migrations.CreateModel(
            name='Documento',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True, serialize=False)),
                ('descripcion', models.CharField(null=True, blank=True, max_length=10)),
                ('nombre', models.CharField(max_length=60)),
                ('estado', models.BooleanField(default=True)),
                ('test_date', models.DateTimeField(null=True, blank=True)),
                ('test_number', models.FloatField(null=True, blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Documento',
                'verbose_name_plural': 'Documentos',
            },
        ),
        migrations.CreateModel(
            name='Escuela',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True, serialize=False)),
                ('nombre', models.CharField(max_length=60)),
                ('abrev', models.CharField(null=True, blank=True, max_length=10)),
                ('codigo', models.CharField(null=True, blank=True, max_length=10)),
            ],
            options={
                'verbose_name': 'Escuela',
                'verbose_name_plural': 'Escuelas',
            },
        ),
        migrations.CreateModel(
            name='Facultad',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True, serialize=False)),
                ('nombre', models.CharField(max_length=60)),
                ('abrev', models.CharField(null=True, blank=True, max_length=10)),
                ('codigo', models.CharField(null=True, blank=True, max_length=10)),
            ],
            options={
                'verbose_name': 'Facultad',
                'verbose_name_plural': 'Facultades',
            },
        ),
        migrations.CreateModel(
            name='Institucion',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True, serialize=False)),
                ('nombre', models.CharField(max_length=60)),
                ('abrev', models.CharField(null=True, blank=True, max_length=10)),
                ('codigo', models.CharField(null=True, blank=True, max_length=10)),
                ('estructura_validada', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name': 'Institución',
                'verbose_name_plural': 'Instituciones',
            },
        ),
        migrations.CreateModel(
            name='JerarquiaAcad',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True, serialize=False)),
                ('tipo', models.CharField(choices=[('INSTITUCION', 'INSTITUCION'), ('FACULTAD', 'FACULTAD'), ('ESCUELA', 'ESCUELA'), ('CARRERA', 'CARRERA'), ('DEPARTAMENTO', 'DEPARTAMENTO')], max_length=30)),
                ('institucion', models.ForeignKey(blank=True, to='skyend_configs.Institucion', null=True)),
                ('parent', models.ForeignKey(blank=True, to='skyend_configs.JerarquiaAcad', null=True)),
            ],
            options={
                'verbose_name': 'JerarquiaAcad',
                'verbose_name_plural': 'JerarquiaAcads',
            },
        ),
        migrations.CreateModel(
            name='NaturalPerson',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True, serialize=False)),
                ('last_name', models.CharField(null=True, blank=True, max_length=10)),
                ('first_name', models.TextField(max_length=60)),
                ('birth_date', models.DateTimeField(null=True, blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'NaturalPerson',
                'verbose_name_plural': 'NaturalPersons',
            },
        ),
        migrations.CreateModel(
            name='UnidadMedida',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True, serialize=False)),
                ('codigo', models.CharField(null=True, blank=True, max_length=10)),
                ('nombre', models.CharField(max_length=60)),
                ('estado', models.BooleanField(default=True)),
                ('test_date', models.DateTimeField(null=True, blank=True)),
                ('test_number', models.FloatField(null=True, blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'UnidadMedida',
                'verbose_name_plural': 'UnidadMedidas',
            },
        ),
        migrations.AddField(
            model_name='institucion',
            name='jerarquia_acad',
            field=models.ForeignKey(blank=True, to='skyend_configs.JerarquiaAcad', related_name='institucion_set', null=True),
        ),
        migrations.AddField(
            model_name='facultad',
            name='jerarquia_acad',
            field=models.ForeignKey(blank=True, to='skyend_configs.JerarquiaAcad', null=True),
        ),
        migrations.AddField(
            model_name='escuela',
            name='jerarquia_acad',
            field=models.ForeignKey(blank=True, to='skyend_configs.JerarquiaAcad', null=True),
        ),
        migrations.AddField(
            model_name='contrato',
            name='documentos',
            field=models.ManyToManyField(to='skyend_configs.Documento', null=True, blank=True),
        ),
        migrations.AddField(
            model_name='carrera',
            name='jerarquia_acad',
            field=models.ForeignKey(blank=True, to='skyend_configs.JerarquiaAcad', null=True),
        ),
    ]
