from django.urls import path

from . import views

app_name = 'toriends'

urlpatterns = [
    path("wait/", views.wait, name='wait'),
    path("main/", views.main, name='main'),
    path('brush/', views.brush, name='brush'),
    path('wash/', views.wash, name='wash'),
    path('goal/', views.goal, name='goal'),
]
