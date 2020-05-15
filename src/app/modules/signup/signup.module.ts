import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {MatCardModule} from '@angular/material/card';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { SignupService } from './signup.service';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}
];

const firebaseConfig = {
  apiKey: "AIzaSyDWuhqXnfQn_Ak008BlQVhQ7ZtqZ_N3lhM",
  authDomain: "rocket-link-af411.firebaseapp.com",
  databaseURL: "https://rocket-link-af411.firebaseio.com",
  projectId: "rocket-link-af411",
  storageBucket: "rocket-link-af411.appspot.com",
  messagingSenderId: "241772828442",
  appId: "1:241772828442:web:8744928677468f0a353ea3",
  measurementId: "G-4E8WL4LG2X"
};

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    // 3. Initialize
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [SignupService]
})
export class SignupModule { }
