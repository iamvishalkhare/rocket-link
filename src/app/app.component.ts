import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnloadService } from './onload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private onloadService: OnloadService, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['lander']);
  }

}
