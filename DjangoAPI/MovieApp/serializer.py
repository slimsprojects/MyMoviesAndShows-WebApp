from rest_framework import serializers
from MovieApp.models import ToWatch, MovieList


class ToWatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToWatch
        fields = ('MovieId',
                    'MovieName',
                    #'PhotoFileName',
                    'IMDBRating',
                    'MovieOrShow')

class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieList 
        fields = ('WatchedMovieId',
                    'WatchedMovieName',
                    'WatchedRating',
                    'IMDBRating',
                    #'PhotoFileName',
                    'MovieOrShow')
