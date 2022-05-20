from django.contrib import admin
from .models import *

# Register your models here.


class BlogAdmin(admin.ModelAdmin):
    list_display = ('blog_title', 'blog_slug', 'status', 'created_at')
    list_filter = ("status",)
    search_fields = ['blog_title', 'blog_post']
    prepopulated_fields = {'blog_slug': ('blog_title',)}


admin.site.register(Project)
admin.site.register(Messages)
admin.site.register(BlogPost, BlogAdmin)
