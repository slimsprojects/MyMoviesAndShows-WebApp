import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = 'http://127.0.0.1:8000';
  readonly PhotoUrl = 'http://127.0.0.1:8000/media';

  constructor(private http:HttpClient) { }

  getToWatchList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/towatch/');
  }
  addToWatch(val:any){
    return this.http.post(this.APIUrl + '/towatch/', val);
  }
  updateToWatch(val:any){
    return this.http.put(this.APIUrl + '/towatch/', val);
  }
  deleteToWatch(val:any){
    return this.http.delete(this.APIUrl + '/towatch/' + val);
  }

  getMovieListList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/movielist/');
  }
  addMovieList(val:any){
    return this.http.post(this.APIUrl + '/movielist/', val);
  }
  updateMovieList(val:any){
    return this.http.put(this.APIUrl + '/movielist/', val);
  }
  deleteMovieList(val:any){
    return this.http.delete(this.APIUrl + '/movielist/' + val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl + '/SaveFile', val);
  }
  getAllMovieNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/towatch/');
  }

}
