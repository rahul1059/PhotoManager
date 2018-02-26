import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PhotosService {
  selected:Array<number> = [];
  photoUrl = "https://jsonplaceholder.typicode.com/photos";

  getPhotos() {
    return this.http.get(this.photoUrl);
  }

  setSeletedId(selected){
    this.selected = selected;
  }

  getSelectedId(){
    return this.selected;
  }

  constructor(private http: HttpClient) { }

}
