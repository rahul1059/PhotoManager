import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  usersUrl = "https://jsonplaceholder.typicode.com/users";

  getUsers() {
    return this.http.get(this.usersUrl);
  }

  constructor(private http: HttpClient) { }

}
