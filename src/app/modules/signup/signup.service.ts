import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { OnloadService } from 'src/app/onload.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private onloadService: OnloadService
  ) {
    this.onloadService.user$ = this.afAuth.authState;
    this.onloadService.user$.subscribe(user => {
      if (user) {
        console.log(user);
        this.router.navigate(['console']);
      }
    });
  }

  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user, 'google');
  }

  async facebookSignIn() {
    const provider = new firebase.auth.FacebookAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user, 'facebook');
  }

  private updateUserData(user: User, provider: string) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = { 
      uid: user.uid, 
      email: user.email, 
      displayName: user.displayName, 
      photoURL: user.photoURL,
      provider: provider
    }
    return userRef.set(data, { merge: true });

  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }

  
}
