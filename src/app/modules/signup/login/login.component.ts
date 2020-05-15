import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
import { SignupService } from '../signup.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(private router: Router, public auth: SignupService) { }

  ngOnInit(): void {
  }

}
