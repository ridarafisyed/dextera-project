from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'first_name','last_name', 'password', 'is_firm', 'is_client')
        # read_only_fields = ('is_active', 'is_superuser', 'is_staff', 'is_firm', 'is_lawyer', 'is_client' )

