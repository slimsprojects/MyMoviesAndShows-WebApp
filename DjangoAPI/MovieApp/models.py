from django.db import models

# Create your models here.
class ToWatch(models.Model):
    MovieId = models.AutoField(primary_key=True)
    MovieName = models.CharField(max_length=100)
    #PhotoFileName = models.CharField(max_length=100)
    IMDBRating = models.CharField(max_length=100)
    MovieOrShow = models.CharField(max_length=5)

class MovieList(models.Model):
    WatchedMovieId = models.AutoField(primary_key=True)
    WatchedMovieName = models.CharField(max_length=100)
    WatchedRating = models.CharField(max_length=100)
    IMDBRating = models.CharField(max_length=100)
    #PhotoFileName = models.CharField(max_length=100)
    MovieOrShow = models.CharField(max_length=5)



