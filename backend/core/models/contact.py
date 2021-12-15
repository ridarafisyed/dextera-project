from django.db import models

# contact information related models 
# it contain company data 
# 
class Contact(models.Model):
    company_name = models.CharField(max_length=255)
    website = models.CharField(max_length=255)
    general_email =models.CharField(max_length=255)
    billing_email = models.CharField(max_length=255)
    


class OfficeAddress(models.Model):
    company = models.CharField(max_length=255)
    office_name= models.CharField(max_length=255)

    street = models.CharField(max_length=255)
    suite = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip = models.CharField(max_length=255)
    plus_four = models.CharField(max_length=255)

class ContactInfo (models.Model):
    company = models.CharField(max_length=255)
    office_name= models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    phone = models.IntegerField(default=0)

class Source(models.Model):
    office = models.IntegerField(default=0)
    team = models.IntegerField(default=0)
    member = models.IntegerField(default=0)