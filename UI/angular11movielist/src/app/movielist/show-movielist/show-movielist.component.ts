import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-movielist',
  templateUrl: './show-movielist.component.html',
  styleUrls: ['./show-movielist.component.css']
})
export class ShowMovielistComponent implements OnInit {

  constructor(private service:SharedService) { }

  MovieListList:any=[];

  ModalTitle:string;
  ActivateAddEditMovieListComp:boolean=false;
  movielist:any;

  WatchedMovieIdFilter:string='';
  WatchedMovieNameFilter:string='';
  WatchedRatingFilter:string='';
  IMDBRatingFilter:string='';
  MovieOrShowFilter:string='';
  MovieListListWithoutFilter:any[];

  ngOnInit(): void {
    this.refreshMovieListList();
  }

  addClick(){
    this.movielist={
      WatchedMovieId:0,
      WatchedMovieName:'',
      WatchedRating:'',
      IMDBRating:'',
      MovieOrShow:''
    }
    this.ModalTitle='Add To Movie List';
    this.ActivateAddEditMovieListComp=true;
  }

  editClick(item){
    this.movielist=item;
    this.ModalTitle='Edit To Movie List';
    this.ActivateAddEditMovieListComp=true;
  }

  closeClick(){
    this.ActivateAddEditMovieListComp=false;
    this.refreshMovieListList();
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteMovieList(item.WatchedMovieId).subscribe(data=>{
        alert(data.toString());
        this.refreshMovieListList();
      })
    }
  }
  
  refreshMovieListList(){
    this.service.getMovieListList().subscribe(data=>{
      this.MovieListList=data;
      this.MovieListListWithoutFilter=data;
    });
  }

  FilterFn(){
    var WatchedMovieIdFilter=this.WatchedMovieIdFilter;
    var WatchedMovieNameFilter=this.WatchedMovieNameFilter;
    var WatchedRatingFilter=this.WatchedRatingFilter;
    var IMDBRatingFilter=this.IMDBRatingFilter;
    var MovieOrShowFilter=this.MovieOrShowFilter;

    this.MovieListList=this.MovieListListWithoutFilter.filter(function(el){
      return el.WatchedMovieId.toString().toLowerCase().includes(
        WatchedMovieIdFilter.toString().trim().toLowerCase()
      )&&
      el.WatchedMovieName.toString().toLowerCase().includes(
        WatchedMovieNameFilter.toString().trim().toLowerCase()
      )&&
      el.WatchedRating.toString().toLowerCase().includes(
        WatchedRatingFilter.toString().trim().toLowerCase()
      )&&
      el.IMDBRating.toString().toLowerCase().includes(
        IMDBRatingFilter.toString().trim().toLowerCase()
      )&&
      el.MovieOrShow.toString().toLowerCase().includes(
        MovieOrShowFilter.toString().trim().toLowerCase()
      )
    });
  }

  sortResult(prop,asc){
    this.MovieListList=this.MovieListListWithoutFilter.sort(function(a,b){
      if(asc){
        return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
      }else{
        return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
      }
    })
  }

 }

 