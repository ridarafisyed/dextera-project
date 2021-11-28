from django.db import models
from django.db.models.deletion import CASCADE


class Profile(models.Model):
    # profile
    username = models.CharField(max_length=255, default="", unique=True)
    email= models.EmailField(max_length=255, default="")
    mobile = models.IntegerField(default=0, blank=True, null=True)
    phone = models.IntegerField(default=0, blank=True, null=True)
    state = models.CharField(max_length=255, default="", blank=True)
    city = models.CharField(max_length=255, default="", blank=True)
    language = models.CharField(max_length=255, default="", blank=True)
    locate = models.BooleanField(default=False)
    search_active = models.BooleanField(default=False)
    # education 
    law_school = models.CharField(max_length=255, default="", blank=True)
    grad_year = models.IntegerField(default=0)
    bar_admit_date = models.CharField(max_length=255, default="", blank=True)
    undergrad_school = models.CharField(max_length=255, default="", blank=True)
    undergrad_area = models.CharField(max_length=255, default="", blank=True)
    undergrad_year = models.CharField(max_length=255, default="", blank=True)
    bar_no =  models.IntegerField(default=12345678, blank=True)
    admitted_practice = models.CharField(max_length=255, default="", blank=True)
    # work history
    practice_time = models.CharField(max_length=255, default="", blank=True)
    longest_tenure = models.CharField(max_length=255, default="", blank=True)
    average_tenure = models.CharField(max_length=255, default="", blank=True)
    current_tenure = models.CharField(max_length=255, default="", blank=True)
    past_bar_companies_no = models.CharField(max_length=255, default="", blank=True)
    primary_area = models.CharField(max_length=255, default="", blank=True)

    # timestemps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username


class Matter(models.Model):
    matter_id = models.IntegerField() # used as a ref
    matter_name = models.CharField(max_length=255)
    matter_type = models.CharField(max_length=255)
    matter_source = models.CharField(max_length=255)
    matter_status = models.CharField(max_length=255)
    assign_to = models.IntegerField() # ref to user 

    # timestemps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Task(models.Model): 
    matter_id = models.ForeignKey(Matter, on_delete=models.CASCADE, related_name="matter")

    assign_to = models.ForeignKey(Profile, on_delete=CASCADE, related_name='assign_to')

    billable = models.BooleanField(default=False)

    private = models.BooleanField(default=False)
    
    detail = models.TextField(blank=True)
    
    file = models.CharField(max_length=500)

    # timestemps
    due_at = models.DateField(max_length=8)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


   