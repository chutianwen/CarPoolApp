import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


import {AgmCoreModule} from '@agm/core';
import {GoogleMapComponent} from './google-map/google-map.component';
import {UserAddressManageComponent} from './user-address-manage/user-address-manage.component';
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {Ng4GeoautocompleteModule} from "ng4-geoautocomplete";
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "ng-pick-datetime";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import { NotFoundComponent } from './not-found/not-found.component';
import { ClarityModule } from "@clr/angular";
import { NavComponent } from './nav/nav.component';

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
    ClarityModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBcm5AnNDQq_IOMjSJ3bnw-96Y3TSYFKDE',
      libraries: ["places"]
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Ng4GeoautocompleteModule.forRoot(),
    RouterModule.forRoot([
      { path:'',component: GoogleMapComponent },
      { path:'add',component: UserAddressManageComponent },
      { path: '**',component: NotFoundComponent }
    ]),
    Ng4GeoautocompleteModule.forRoot(),
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  declarations: [ AppComponent, GoogleMapComponent, UserAddressManageComponent, NotFoundComponent, NavComponent ],
  bootstrap: [ AppComponent ]
})



export class AppModule {}
