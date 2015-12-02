from django.db import models


class NaturalPerson(models.Model):

    last_name = models.CharField(max_length=10, null=True, blank=True)
    first_name = models.TextField(max_length=60)
    birth_date = models.DateTimeField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "NaturalPerson"
        verbose_name_plural = "NaturalPersons"

    def __str__(self):
        return self.first_name
