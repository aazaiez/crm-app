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
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
