import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rocket-link-ng';

  constructor(private http: HttpClient, private router: Router) {
    const baseURL = window.location.protocol + '//' + window.location.host;
    let usableUrl = baseURL.includes('localhost') ? baseURL+':4200' : baseURL;
    // this.http.get<any>(baseURL+ '/api/hi').subscribe(res => {
    //   console.log(res.hi);
    // });
  }

  ngOnInit(): void {
    this.router.navigate(['lander']);
  }

  
}
