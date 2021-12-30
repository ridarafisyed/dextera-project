from django.shortcuts import get_object_or_404, render
from rest_framework import viewsets, permissions
from rest_framework.decorators import permission_classes

from rest_framework.response import Response


# # Create your views here.
# class RoleViewset(viewsets.ModelViewSet):
#     # queryset = Role.objects.all()
#     permission_classes = [permissions.AllowAny]
#     serializer_class = RoleCreateSerializer
#     lookup_field = 'username'
#     lookup_url_kwarg = 'username'
    
#     def get_queryset(self, queryset=None, **kwargs):
#        item = self.kwargs.get('username')
#        return get_object_or_404(Role, username=item)

#     def get_queryset(self):
#         return Role.objects.all()    