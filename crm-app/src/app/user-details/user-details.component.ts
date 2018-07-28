import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id$: number;
  user$: Object;
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    private data: DataService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(
      (params) => {
        this.id$ = params.id;
      }
    );
  }

  ngOnInit() {
    this.data.fetchUser(this.id$)
      .subscribe(
        (data) => {
        this.user$ = data;
        }
      );
  }

  onSubmit() {
    this.userForm.value.id = this.id$;
    this.data.updateUser(this.userForm.value);
    console.log(this.userForm.value);
  }

  onDelete() {
    this.data.deleteUser(this.id$);
  }

}
