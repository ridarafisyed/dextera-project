
from rest_framework import serializers
from ..models.profile import Profile


class ProfileShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields =  ('id',
                    'username',
                    'email',
                    'status'
                   )


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields =  ('id',
                    'username',
                    'email',
                    'mobile',
                    'phone',
                    'state',
                    'city',
                    'language',
                    'locate',
                    'search_active',
                    'law_school',
                    'grad_year',
                    'bar_admit_date',
                    'undergrad_school',
                    'undergrad_area',
                    'undergrad_year',
                    'bar_no',
                    'admitted_practice',
                    'practice_time',
                    'longest_tenure',
                    'average_tenure',
                    'current_tenure',
                    'past_bar_companies_no',
                    'primary_area',)
        