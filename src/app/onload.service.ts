import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class OnloadService {

  baseURL: string = window.location.protocol + '//' + window.location.host;
  user$: Observable<User>;

  constructor(private http: HttpClient) {
    let hostUrl = this.baseURL.includes('localhost') ? this.baseURL+':4200' : this.baseURL;
  }
}
