from itertools import product
from turtle import title, update
from django.shortcuts import render
from rest_framework.views import APIView
from .models import Messages, Project
from rest_framework import status
from rest_framework.response import Response

from .serializers import MessageSerializer, ProjectSerializer

# Create your views here.

class CreateProjectView(APIView):
    qSet = Project.objects.all()
    serializer_class=ProjectSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            project_title = serializer.data.get('project_title')
            link_url = serializer.data.get('link_url')
            cover_image = serializer.data.get('cover_image')
            screenshots = serializer.data.get('screenshots')
            languages = serializer.data.get('languages')
            query_set = Project.objects.filter(project_title=project_title)
            for screenshot in screenshots:
                if query_set.exists():
                    project = query_set[0]
                    project.link_url = link_url
                    project.screenshots = screenshots
                    project.languages = languages
                    project.save(update_fields=['link_url', 'cover_image', 'screenshots', 'languages'])
                    return Response({'success':'Project existed but has been Successfully updated'}, status=status.HTTP_201_CREATED)

                else:
                    project = Project(
                        project_title=project_title,
                        link_url=link_url,
                        cover_image=cover_image, 
                        screenshots=screenshots,
                        languages=languages)
                    project.save()
                return Response({'success':'Project Created Successfully'}, status=status.HTTP_201_CREATED)

            return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
        

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

class GetCSRFToken(APIView):

    def get(self, request, format=None):
        return Response({'success': 'CSRF cookie set'})


class SendMessage(APIView):
    serializer_class = MessageSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            message = serializer.data.get('messages')
            messo = Messages(messages=message)
            messo.save()
            return Response({'success':'Message sent Successfully'}, status=status.HTTP_201_CREATED)
        return Response({'error':'Bad Request'}, status=status.HTTP_400_BAD_REQUEST)
