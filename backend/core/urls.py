from django.urls import path, include, re_path
from .views import ProfileDetailViewset, ProfileList

from rest_framework import routers



# # router.register('user', UserViewset, 'user')
# router.register('company', CompanyViewset,  'company')
# router.register('invoice', InvoiceViewset,  'invoice')

# router.register('country', CountryViewset, 'country')
# router.register('county-record', CountyRecorderViewset, 'county-recorder')
# router.register('office', OfficeViewset, 'office')
# router.register('court-record', CourtRecordViewset, 'court-record')
# router.register('efile-services',EFileServicesViewset , 'efile-serivees')
# router.register('lead',LeadViewset , 'lead')
# router.register('client-vic-atty',ClientVicAttyViewset , 'client-vic-atty')
# router.register('client-vic-info', ClientVicInfoViewset , 'client-vic-info')
# router.register('sheriff-detail',SheriffDetailViewset , 'sheriff-detail')
# router.register('job-board', JobBoardViewset , 'job-board')
# router.register('matter', MatterViewset, 'matter')

# install axios in react app and pip install django-cors-headers in django app 



router = routers.DefaultRouter()
router.register(r'profile', ProfileList, basename='profile')

urlpatterns = router.urls
# urlpatterns = [
    
#     # path('api', InvoiceView.as_view())
#     path('profile/', ProfileList, 'profile'),
#     re_path('^profile/(?P<username>.+)/$', ProfileDetailViewset, 'profile-detail'),
# ]
