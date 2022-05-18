from rest_framework.views import APIView
from .models import Messages, Project, BlogPost
from rest_framework import status
from rest_framework.response import Response
from .serializers import BlogPostSerializer, CreateBlogPostSerializer, MessageSerializer, ProjectSerializer

# Create your views here.


class CreateProjectView(APIView):
    qSet = Project.objects.all()
    serializer_class = ProjectSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': 'Project Created Successfully'}, status=status.HTTP_201_CREATED)


class ViewMessages(APIView):
    def get(self, request, format=None):
        messages = Messages.objects.all()
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ProjectView(APIView):
    def get(self, request, format=None):
        project = Project.objects.all()
        serializer = ProjectSerializer(project, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CreateBlogPosts(APIView):
    serializer_class = CreateBlogPostSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            blog_title = serializer.data.get('blog_title')
            blog_post = serializer.data.get('blog_post')
            paste_bin = serializer.data.get('paste_bin')
            query_set = BlogPost.objects.filter(blog_title=blog_title)
            if query_set.exists():
                blogPost = query_set[0]
                blogPost.blog_post = blog_post
                blogPost.paste_bin = paste_bin
                blogPost.save(update_fields=['blog_post', 'paste_bin'])
                return Response({'Success': 'BlogPost successfully updated'}, status=status.HTTP_200_OK)
            else:
                Blog = BlogPost(blog_title=blog_title,
                                blog_post=blog_post, paste_bin=paste_bin)
                Blog.save()
                return Response({'Success': 'Blog post created Successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'Error': 'Invalid request'}, status=status.HTTP_400_BAD_REQUEST)


class AllBlogPosts(APIView):
    def get(self, request, format=None):
        posts = BlogPost.objects.all()
        serializer = BlogPostSerializer(posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


# class ShowBlogPost(APIView):
#     lookup_url_kwargs = 'blog_slug'

#     def post(self, request, format=None):
#         blog_slug = request.data.get(self.lookup_url_kwargs)
#         if blog_slug != None:
#             blog = BlogPost.objects.filter(blog_slug=blog_slug)
#             if len(blog) > 0:
#                 blogPost = blog[0]
#                 return Response({'message': 'blogPost Viewing'}, status=status.HTTP_200_OK)
#             return Response({'Bad Request': 'blog_slug invalid'}, status=status.HTTP_400_BAD_REQUEST)
#         return Response({'Bad Request': 'No blogPost blog_slug Passed'}, status=status.HTTP_400_BAD_REQUEST)


class OneBlogPost(APIView):
    lookup_kwargs = 'blog_slug'

    def get(self, request, format=None):
        blog_slug = request.GET.get(self.lookup_kwargs)
        if blog_slug != None:
            blog = BlogPost.objects.filter(blog_slug=blog_slug)
            if blog.exists():
                blogpost = BlogPostSerializer(blog[0]).data
                return Response(blogpost, status=status.HTTP_200_OK)
            else:
                return Response({'Error': 'BlogPost not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'Error': 'No Blog_ID Provided'}, status=status.HTTP_400_BAD_REQUEST)


class GetCSRFToken(APIView):

    def get(self, request, format=None):
        return Response({'success': 'CSRF cookie set'})


class SendMessage(APIView):
    serializer_class = MessageSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': 'Message sent Successfully'}, status=status.HTTP_201_CREATED)
        return Response({'error': 'Bad Request'}, status=status.HTTP_400_BAD_REQUEST)
