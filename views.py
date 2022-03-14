from django.shortcuts import render
from django.http import request

def index(request, *args, **kwargs):
    return render(request, './index.html')