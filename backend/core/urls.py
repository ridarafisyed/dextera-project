# from django.urls import path, include, re_path
from .views.profile import ProfileList
from .views.matter import MatterList
from .views.category import CategoryViewset, SubCategoryViewset, ClassificationViewset

from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'profile', ProfileList, basename='profile')
router.register(r'matter', MatterList, basename="matter")
router.register(r'category', CategoryViewset, basename="category")
router.register(r'sub-category', SubCategoryViewset, basename="sub-category")
router.register(r'classification', ClassificationViewset, basename="classification")

urlpatterns = router.urls



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


# install axios in react app and pip install django-cors-headers in django app 




# urlpatterns = [
    
#     # path('api', InvoiceView.as_view())
#     path('profile/', ProfileList, 'profile'),
#     re_path('^profile/(?P<username>.+)/$', ProfileDetailViewset, 'profile-detail'),
# ]
