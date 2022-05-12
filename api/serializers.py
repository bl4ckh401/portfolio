from pyexpat import model
from django.db import models
from rest_framework import fields, serializers
from .models import BlogPost, Messages, Project
from rest_framework import serializers


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['project_title', 'link_url',
                  'cover_image', 'screenshots', 'languages', 'github_repo']


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = ['email', 'subject', 'message']


class BlogPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogPost
        fields = ['blog_id', 'blog_title', 'blog_slug',
                  'blog_post', 'paste_bin', 'likes', 'comments']


class CreateBlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['blog_title', 'blog_post', 'paste_bin']
