

import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule} from "angularfire2/firestore";
import { Observable } from 'rxjs/Observable';


interface userActivity {
  // fields from input documents
  // !userName cannot be empty String.
  userName: string;
  arrival: string;
  departure: string;
  role: string;
  address: string;
  zipCode: string;
  price: number;
  memo: string;
}

@Component({
  selector: 'app-user-address-manage',
  templateUrl: './user-address-manage.component.html',
  styleUrls: ['./user-address-manage.component.css']
})

export class UserAddressManageComponent implements OnInit {

  static test = [10, 20, 30];

  static showTest(){
    alert(this.test);
  }

  userName: string = "";
  arrival: string = "";
  departure: string = "";
  role: string = "";
  address: string = "";
  zipCode: string = "";
  price: number = 0;
  memo: string = "";

  // collection from fire base
  userActivityCollection: AngularFirestoreCollection<userActivity>;
  userActivities: Observable<userActivity[]>;

  add(){

    this.userActivityCollection.doc(this.userName).set({
      userName: this.userName,
      arrival: this.arrival,
      departure: this.departure,
      role: this.role,
      address: this.address,
      zipCode: this.zipCode,
      price: this.price,
      memo: this.memo
    }).catch((err)=>{
      // alert(err);
      console.log(err);
    })
  };

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.userActivityCollection = this.db.collection("userActivityCollection");
    this.userActivities = this.userActivityCollection.valueChanges();
  }

}
