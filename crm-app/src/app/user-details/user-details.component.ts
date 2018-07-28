import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(
      (params) => {
        this.id$ = params.id;
      }
    );
  }

  ngOnInit() {
    console.log(this.user$);
    this.data.fetchUser(this.id$)
      .subscribe(
        (data) => {
        this.user$ = data;
        }
      );
  }

  onSubmit() {
    this.userForm.value.id = this.id$;
    if (this.userForm.value.firstName === '') {
      this.userForm.value.firstName = this.user$['firstName'];
    }
    if (this.userForm.value.lastName === '') {
      this.userForm.value.lastName = this.user$['lastName'];
    }
    if (this.userForm.value.email === '') {
      this.userForm.value.email = this.user$['email'];
    }
    if (this.userForm.value.phoneNumber === '') {
      this.userForm.value.phoneNumber = this.user$['phoneNumber'];
    }
    this.data.updateUser(this.userForm.value)
      .subscribe(
        (data) => {
        }
      );
    console.log(this.userForm.value);
  }

  onDelete() {
    this.data.deleteUser(this.id$)
      .subscribe(
        (data) => {
        }
      );
    this.router.navigate(['./users']);
  }
}
