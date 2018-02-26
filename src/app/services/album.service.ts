import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AlbumService {

  albumsUrl = "https://jsonplaceholder.typicode.com/albums";

  getUsers() {
    return this.http.get(this.albumsUrl);
  }

  constructor(private http: HttpClient) { }
}
