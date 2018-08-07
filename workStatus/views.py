from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import (LoginView, LogoutView)


class Login(LoginView):
    """ログインページ"""
    form_class = LoginView
    template_name = 'workStatus/login.html'


class Logout(LoginRequiredMixin, LogoutView):
    """ログアウトページ"""
    template_name = 'workStatus/login.html'


def index(request):
    return render(request, 'workStatus/calendar.html')


@login_required
def work_calendar(request):
    return render(request, 'workStatus/calendar.html')


@login_required
def work_status(request):
    print(request.user)
    return render(request, 'workStatus/statusList.html')
