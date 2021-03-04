import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-towatch',
  templateUrl: './show-towatch.component.html',
  styleUrls: ['./show-towatch.component.css']
})
export class ShowTowatchComponent implements OnInit {

  constructor(private service:SharedService) { }

  ToWatchList:any=[];

  ModalTitle:string;
  ActivateAddEditToWatchComp:boolean=false;
  towatch:any;

  MovieIdFilter:string='';
  MovieNameFilter:string='';
  IMDBRatingFilter:string='';
  MovieOrShowFilter:string='';
  ToWatchListWithoutFilter:any[];

  ngOnInit(): void {
    this.refreshToWatchList();
  }

  addClick(){
    this.towatch={
      MovieId:0,
      MovieName:'',
      IMDBRating:'',
      MovieOrShow:''
    }
    this.ModalTitle='Add To Watch';
    this.ActivateAddEditToWatchComp=true;
  }

  editClick(item){
    this.towatch=item;
    this.ModalTitle='Edit To Watch';
    this.ActivateAddEditToWatchComp=true;
  }

  closeClick(){
    this.ActivateAddEditToWatchComp=false;
    this.refreshToWatchList();
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteToWatch(item.MovieId).subscribe(data=>{
        alert(data.toString());
        this.refreshToWatchList();
      })
    }
  }
  
  refreshToWatchList(){
    this.service.getToWatchList().subscribe(data=>{
      this.ToWatchList=data;
      this.ToWatchListWithoutFilter=data;
    });
  }

  FilterFn(){
    var MovieIdFilter=this.MovieIdFilter;
    var MovieNameFilter=this.MovieNameFilter;
    var IMDBRatingFilter=this.IMDBRatingFilter;
    var MovieOrShowFilter=this.MovieOrShowFilter;

    this.ToWatchList=this.ToWatchListWithoutFilter.filter(function(el){
      return el.MovieId.toString().toLowerCase().includes(
        MovieIdFilter.toString().trim().toLowerCase()
      )&&
      el.MovieName.toString().toLowerCase().includes(
        MovieNameFilter.toString().trim().toLowerCase()
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
    this.ToWatchList=this.ToWatchListWithoutFilter.sort(function(a,b){
      if(asc){
        return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
      }else{
        return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
      }
    })
  }

}
