import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './google-map/google-map.component';
import { UserAddressManageComponent } from './user-address-manage/user-address-manage.component';
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBqvRd9oGomx7YejW1NwCMsAHpGqZmRaiQ",
  authDomain: "task-list-angular.firebaseapp.com",
  databaseURL: "https://task-list-angular.firebaseio.com",
  projectId: "task-list-angular",
  storageBucket: "task-list-angular.appspot.com",
  messagingSenderId: "410530619389"
};

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgBGcjD3ZvdWrmkKeaRT-S-W47ARIZxj4'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  declarations: [ AppComponent, GoogleMapComponent, UserAddressManageComponent ],
  bootstrap: [ AppComponent ]
})



export class AppModule {}