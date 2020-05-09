import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lander',
  templateUrl: './lander.component.html',
  styleUrls: ['./lander.component.css']
})
export class LanderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  lazy() {
    this.router.navigate(['signup']);
  }


}
