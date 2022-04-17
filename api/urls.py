from django.urls import path
from .views import CreateProjectView, GetCSRFToken, ProjectView, SendMessage, ViewMessages
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('create-project/', CreateProjectView.as_view(), name='create_project'),
    path('work/', ProjectView.as_view(), name='work'),
    path('getcsrf/', GetCSRFToken.as_view()),
    path('chats/', ViewMessages.as_view()),
    path('send-chats/', SendMessage.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
