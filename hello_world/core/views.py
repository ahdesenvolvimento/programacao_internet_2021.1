from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
        'texto':'Hello world!'
    }
    return render(request, 'index.html', context)