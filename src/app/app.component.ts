import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rocket-link-ng';

  constructor(private http: HttpClient) {
    const baseURL = window.location.protocol + '//' + window.location.host;
    let usableUrl = baseURL.includes('localhost') ? baseURL+':4200' : baseURL;
    this.http.get<any>(baseURL+ '/api/hi').subscribe(res => {
      console.log(res.hi);
    });
  }
}
