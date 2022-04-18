from django.db import models
from rest_framework import fields, serializers
from .models import Messages, Project
from rest_framework import serializers


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['project_title', 'link_url', 'cover_image', 'screenshots', 'languages']

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = ['message', 'email', 'subject']
