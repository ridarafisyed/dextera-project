# Create your views here.
from ..models.profile import Profile
from rest_framework import  viewsets, permissions
from django.shortcuts import get_object_or_404
from ..serializers.profile import ProfileDetailSerializer, ProfileSerializer
from rest_framework.response import Response




class ProfileList(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProfileSerializer

    def retrieve(self, request, pk=None):
        queryset = Profile.objects.get(username=pk)
        profile = get_object_or_404(queryset, pk=1)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)
    

# access 
class ProfileDetailViewset(viewsets.ModelViewSet):
        serializer_class = ProfileDetailSerializer

        def get_queryset(self):
            username = self.kwargs['username']
            return Profile.objects.get(profile__username=username)
        
        