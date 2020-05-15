import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../../../user';
import { OnloadService } from 'src/app/onload.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: Observable<User>;

  constructor(private router: Router, private afs: AngularFirestore, private onloadService: OnloadService) {
    this.onloadService.user$.subscribe(user => {
      this.user = this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      this.user.subscribe(userFromDb => {
        userFromDb.username ? this.router.navigate(['console/admin']) : this.router.navigate(['console/username']);
      });
    });
  }

  ngOnInit(): void {
  }

}
