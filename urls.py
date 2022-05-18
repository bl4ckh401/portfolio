from django.urls import path
from views import index

urlpatterns = [
    path('', index),
    path('work/', index),
    path('contact/', index),
    path('thoughts/', index),
    path('thoughts/<str:blog_slug>', index),
]
