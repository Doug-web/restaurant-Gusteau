from django.urls import path
from . import views

app_name = 'gusteaus_app'

urlpatterns = [
    path('', views.index, name='index'),
    path('menu/', views.menu, name='menu'),
    path('cave/', views.cave, name='cave'),
    path('brigade/', views.brigade, name='brigade'),
    path('galerie/', views.galerie, name='galerie'),
    path('critique/', views.critique, name='critique'),
    path('histoire/', views.histoire, name='histoire'),
    path('contact/', views.contact, name='contact'),
]