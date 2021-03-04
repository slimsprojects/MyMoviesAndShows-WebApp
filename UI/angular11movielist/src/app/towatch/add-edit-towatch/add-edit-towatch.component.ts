import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from'src/app/shared.service';

@Component({
  selector: 'app-add-edit-towatch',
  templateUrl: './add-edit-towatch.component.html',
  styleUrls: ['./add-edit-towatch.component.css']
})
export class AddEditTowatchComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() towatch:any;
  MovieId:string;
  MovieName:string;
  IMDBRating:string;
  MovieOrShow:string;

  ngOnInit(): void {
    this.MovieId=this.towatch.MovieId;
    this.MovieName=this.towatch.MovieName;
    this.IMDBRating=this.towatch.IMDBRating;
    this.MovieOrShow=this.towatch.MovieOrShow;
  }

  addToWatch(){
    var val = {MovieId:this.MovieId,
                MovieName:this.MovieName,
                IMDBRating:this.IMDBRating,
                MovieOrShow:this.MovieOrShow};
    this.service.addToWatch(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateToWatch(){
    var val = {MovieId:this.MovieId,
                MovieName:this.MovieName,
                IMDBRating:this.IMDBRating,
                MovieOrShow:this.MovieOrShow};
    this.service.updateToWatch(val).subscribe(res=>{
      alert(res.toString());
    });
  }


}
