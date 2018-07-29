import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-demo-access',
  templateUrl: './demo-access.component.html',
  styleUrls: ['./demo-access.component.css']
})
export class DemoAccessComponent implements OnInit {

  constructor(
    private authGuard: AuthGuard,
    private authServie: AuthService
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.authServie.login();
  }

}
