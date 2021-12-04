# Create your views here.
from ..models.matter import Matter
from rest_framework import  viewsets, permissions
# from django.shortcuts import get_object_or_404
from ..serializers.matter import MatterSerializer
# from rest_framework.response import Response




class MatterList(viewsets.ModelViewSet):
    queryset = Matter.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MatterSerializer

    # def retrieve(self, request, pk=None):
    #     queryset = Matter.objects.get(pk=pk)
    #     profile = get_object_or_404(queryset, pk=1)
    #     serializer = MatterSerializer(profile)
    #     return Response(serializer.data)
    

# # access detailed view 
# class MatterDetailViewset(viewsets.ModelViewSet):
#         serializer_class = MatterSerializer

#         def get_queryset(self):
#             username = self.kwargs['username']
#             return Matter.objects.get(profile__username=username)
        
        