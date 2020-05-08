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
    this.http.get<any>('http://localhost:4200/api/hi').subscribe(res => {
      console.log(res);
    });
  }
}
