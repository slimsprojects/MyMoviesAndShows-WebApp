import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from'src/app/shared.service';

@Component({
  selector: 'app-add-edit-movielist',
  templateUrl: './add-edit-movielist.component.html',
  styleUrls: ['./add-edit-movielist.component.css']
})
export class AddEditMovielistComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() movielist:any;
  WatchedMovieId:string;
  WatchedMovieName:string;
  WatchedRating:string;
  IMDBRating:string;
  MovieOrShow:string;

  AllMoviesOrShowsList:any=[];

  ngOnInit(): void {
    this.loadAllMoviesOrShowsList();
  }

  loadAllMoviesOrShowsList(){
    this.service.getAllMovieNames().subscribe((data:any)=>{
      this.AllMoviesOrShowsList=data;

      this.WatchedMovieId=this.movielist.WatchedMovieId;
      this.WatchedMovieName=this.movielist.WatchedMovieName;
      this.WatchedRating=this.movielist.WatchedRating;
      this.IMDBRating=this.movielist.IMDBRating;
      this.MovieOrShow=this.movielist.MovieOrShow;
    });
  }

  addMovieList(){
    var val = {WatchedMovieId:this.WatchedMovieId,
                WatchedMovieName:this.WatchedMovieName,
                WatchedRating:this.WatchedRating,
                IMDBRating:this.IMDBRating,
                MovieOrShow:this.MovieOrShow};
    this.service.addMovieList(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateMovieList(){
    var val = {WatchedMovieId:this.WatchedMovieId,
                WatchedMovieName:this.WatchedMovieName,
                WatchedRating:this.WatchedRating,
                IMDBRating:this.IMDBRating,
                MovieOrShow:this.MovieOrShow};
    this.service.updateMovieList(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
