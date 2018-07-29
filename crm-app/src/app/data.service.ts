import { Injectable } from '@angular/core';
// importing hhtp client necessary for api calls
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  all_users = {};
  constructor(
    private http: HttpClient
  ) { }

  fetchUsers() {
    return this.http.get('http://localhost:3000/users');
  }

  fetchUser(id) {
    return this.http.get('http://localhost:3000/users/' + id);
  }

  updateUser(user) {
    return this.http.put('http://localhost:3000/users/' + user.id, user);
  }

  deleteUser(id) {
    return this.http.delete('http://localhost:3000/users/' + id);
  }

  findUser() {
    this.http.get('http://localhost:3000/users')
      .subscribe(
        data => this.all_users = data
      );
    console.log(this.all_users);
  }
}
