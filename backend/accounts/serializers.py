from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model


User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'first_name','last_name','username', 'password', 'is_firm', 'is_lawyer','is_client')

