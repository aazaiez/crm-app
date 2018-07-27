import { Component, OnInit } from '@angular/core';
// importing the service is required in order to inject it and use it
import { DataService } from '../data.service';
// importing the observable is required in order to hold the data returned by the api
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // we create a property to hold data returned by api. this property (data) can be accessed by
  // corresponding component
  users$: Object;

  // here is where we inject the service, any method defined within the service can be called
  // using data.METHOD_NAME()
  constructor(
    private data: DataService
  ) { }


  // any code within ngOnInit is executed when component loads
  ngOnInit() {
    this.data.fetchUsers().subscribe(
      data => this.users$ = data
    );
  }

}
