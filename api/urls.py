from django.urls import path
from .views import BlogPost, AllBlogPosts, CreateBlogPosts, CreateProjectView, GetCSRFToken, OneBlogPost, ProjectView, SendMessage, ShowBlogPost, ViewMessages

urlpatterns = [
    path('create-project/', CreateProjectView.as_view(), name='create_project'),
    path('work/', ProjectView.as_view(), name='work'),
    path('getcsrf/', GetCSRFToken.as_view()),
    path('create-blogpost/', CreateBlogPosts.as_view()),
    path('show-post/', ShowBlogPost.as_view()),
    path('blogpost/', OneBlogPost.as_view()),
    path('blog/', AllBlogPosts.as_view()),
    path('chats/', ViewMessages.as_view()),
    path('send-chats/', SendMessage.as_view()),
]
