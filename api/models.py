from django.db import models

# Create your models here.


class Project(models.Model):
    project_title = models.CharField(max_length=25, default="", null=True)
    link_url = models.CharField(max_length=255, default="", null=True)
    cover_image = models.ImageField(
        upload_to='images', max_length=255, null=True)
    screenshots = models.ImageField(
        upload_to='images', max_length=255, null=True)
    languages = models.CharField(max_length=255, default="", null=True)

    def __str__(self):
        return self.project_title


class Messages(models.Model):
    email = models.CharField(max_length=255, default='', null=True)
    message = models.CharField(max_length=255, default='', null=True)
    subject = models.CharField(max_length=255, default='', null=True)

    def __str__(self):
        return self.email
