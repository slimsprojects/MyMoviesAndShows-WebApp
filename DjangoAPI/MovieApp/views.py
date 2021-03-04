from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt 
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage

from MovieApp.models import ToWatch, MovieList
from MovieApp.serializer import ToWatchSerializer, MovieListSerializer

# Create your views here.
@csrf_exempt
def towatchApi(request,id=0):
    if request.method=='GET':
        towatch = ToWatch.objects.all()
        towatch_serializer = ToWatchSerializer(towatch, many=True)
        return JsonResponse(towatch_serializer.data, safe=False)
    elif request.method=='POST':
        towatch_data = JSONParser().parse(request)
        towatch_serializer = ToWatchSerializer(data=towatch_data)
        if towatch_serializer.is_valid():
            towatch_serializer.save()
            return JsonResponse('Added Successfully!!', safe=False)
        return JsonResponse('Failed to Add', safe=False)
    elif request.method=='PUT':
        towatch_data =JSONParser().parse(request)
        towatch = ToWatch.objects.get(MovieId=towatch_data['MovieId'])
        towatch_serializer = ToWatchSerializer(towatch, data=towatch_data)
        if towatch_serializer.is_valid():
            towatch_serializer.save()
            return JsonResponse('Update Successfully!!', safe=False)
        return JsonResponse('Failed to Update', safe=False)
    elif request.method=='DELETE':
        towatch = ToWatch.objects.get(MovieId=id)
        towatch.delete()
        return JsonResponse('Deleted Successfully', safe=False)


@csrf_exempt
def movielistApi(request,id=0):
    if request.method=='GET':
        movielist = MovieList.objects.all()
        movielist_serializer = MovieListSerializer(movielist, many=True)
        return JsonResponse(movielist_serializer.data, safe=False)
    elif request.method=='POST':
        movielist_data = JSONParser().parse(request)
        movielist_serializer = MovieListSerializer(data=movielist_data)
        if movielist_serializer.is_valid():
            movielist_serializer.save()
            return JsonResponse('Added Successfully!!', safe=False)
        return JsonResponse('Failed to Add', safe=False)
    elif request.method=='PUT':
        movielist_data =JSONParser().parse(request)
        movielist = MovieList.objects.get(WatchedMovieId=movielist_data['WatchedMovieId'])
        movielist_serializer = MovieListSerializer(movielist, data=movielist_data)
        if movielist_serializer.is_valid():
            movielist_serializer.save()
            return JsonResponse('Update Successfully!!', safe=False)
        return JsonResponse('Failed to Update', safe=False)
    elif request.method=='DELETE':
        movielist = MovieList.objects.get(WatchedMovieId=id)
        movielist.delete()
        return JsonResponse('Deleted Successfully', safe=False)


@csrf_exempt
def SaveFile(request):
    file = request.FILES['uploadedFile']
    file_name = default_storage.save(file.name, file)

    return JsonResponse(file_name, safe=False)
