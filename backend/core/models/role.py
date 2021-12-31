from django.db import models


class Role(models.Model):
    name = models.CharField(max_length=100) 
    
class RoleFunctions(models.Model):
    name = models.CharField( max_length=100)
    view = models.BooleanField(default=False)
    edit = models.BooleanField(default=False)
    create = models.BooleanField(default=False)
    delete = models.BooleanField(default=False)
    contacts = models.BooleanField(default=False)
    team = models.BooleanField(default=False)
    office = models.BooleanField(default=False)
    region = models.BooleanField(default=False)
    