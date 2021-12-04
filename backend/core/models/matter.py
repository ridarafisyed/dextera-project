from django.db import models
from .profile import Profile

class Matter(models.Model):
    matter_id = models.IntegerField() # used as a ref
    matter_name = models.CharField(max_length=255)
    matter_type = models.CharField(max_length=255)
    matter_source = models.CharField(max_length=255)
    matter_status = models.CharField(max_length=255)
    assign_to = models.IntegerField(default=0) # ref to user 
    assign_by = models.IntegerField(default=0) # ref to user 
    # timestemps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Task(models.Model): 
    matter_id = models.ForeignKey(Matter, on_delete=models.CASCADE, related_name="matter")
    assign_to = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='assign_to')
    billable = models.BooleanField(default=False)
    private = models.BooleanField(default=False)    
    detail = models.TextField(blank=True)
    file = models.CharField(max_length=500)

    # timestemps
    due_at = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

