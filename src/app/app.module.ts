import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { LanderComponent } from './lander/lander.component';

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
  declarations: [
    AppComponent,
    LanderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // 3. Initialize
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
