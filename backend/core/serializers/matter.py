from rest_framework import serializers
from ..models.matter import Matter

class MatterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Matter
        fields =  (
            "id",
            "matter_id",
            "matter_name",
            "matter_type",
            "matter_source",
            "matter_status", # open close 
            "assign_to",
            "assign_by ", # by firm 
        )