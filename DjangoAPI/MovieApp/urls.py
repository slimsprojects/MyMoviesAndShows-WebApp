from django.conf.urls import url 
from MovieApp import views 
from django.conf.urls.static import static 
from django.conf import settings 

urlpatterns = [
    url(r'^towatch/$',views.towatchApi),
    url(r'^towatch/([0-9]+)$',views.towatchApi),

    url(r'^movielist/$', views.movielistApi), 
    url(r'^movielist/([0-9]+)$', views.movielistApi),

    url(r'^SaveFile$', views.SaveFile)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

