import { Component, OnInit } from '@angular/core';
import { OnloadService } from 'src/app/onload.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  username: string;
  constructor(public onload: OnloadService) { }

  ngOnInit(): void {
  }

  print() {
    console.log(this.username);
  }

}
