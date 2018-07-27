import { Injectable } from '@angular/core';
// importing hhtp client necessary for api calls
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  fetchUsers() {
    return this.http.get('http://localhost:3000/users');
  }

  fetchUser(id) {
    return this.http.get('http://localhost:3000/users/' + id);
  }
}
