from django.shortcuts import render


def index(request):
    return render(request, 'index.html')

def menu(request):
    return render(request, 'menu.html')

def cave(request):
    return render(request, 'cave.html')

def brigade(request):
    return render(request, 'brigade.html')

def galerie(request):
    return render(request, 'galerie.html')

def critique(request):
    return render(request, 'critique.html')

def histoire(request):
    return render(request, 'histoire.html')

def contact(request):
    return render(request, 'contact.html')