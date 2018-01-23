///<reference path="../../../node_modules/rxjs/Observable.d.ts"/>
import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule} from "angularfire2/firestore";
import { Observable } from 'rxjs/Observable';
import {MapsAPILoader} from "@agm/core";

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

/**
 * Send userData to MapComponent, for displaying on Map.
 */
export class messageToMapComponent{
  constructor(public userName: string, public address: string){}
}

@Component({
  selector: 'app-user-address-manage',
  templateUrl: './user-address-manage.component.html',
  styleUrls: ['./user-address-manage.component.css']
})

export class UserAddressManageComponent implements OnInit {

  // ng-models, binding fields from user input data.
  userName: string = "Jing";
  arrival: string = "";
  departure: string = "";
  role: string = "";
  address: string = "";
  zipCode: string = "";
  price: number = 0;
  memo: string = "";

  // collection from fire base
  userActivityCollection: AngularFirestoreCollection<userActivity>;
  userActivities: Observable<Array<userActivity>>;

  // messages gonna be sent
  userAddressDataMessageSent: Array<messageToMapComponent>;

  public userSettings: any = {
    geoLocation: [37.76999, -122.44696],
    geoRadius: 5
  };

  autoCompleteCallback(data: any) {
    this.address = JSON.stringify(data);
  }

  // message sender
  @Output() messageEvent = new EventEmitter<Array<messageToMapComponent>>();

  /**
   * Sent userAddressDataMessageSent to parent component GoogleMapComponent
   */
  sendMessage() {
    this.messageEvent.emit(this.userAddressDataMessageSent);
  }

  add() {
    this.userActivityCollection.doc(this.userName).set({
      userName: this.userName,
      arrival: this.arrival,
      departure: this.departure,
      role: this.role,
      address: this.address,
      zipCode: this.zipCode,
      price: this.price,
      memo: this.memo
    }).catch((err) => {
      // alert(err);
      console.log(err);
    });
  }

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.userActivityCollection = this.db.collection("userActivityCollection");
    this.userActivities = this.userActivityCollection.valueChanges();
    let res = this.userActivities.forEach(x => {
      this.userAddressDataMessageSent = x.map(doc => {
        return new messageToMapComponent(doc.userName, doc.address);
      });
      alert("DDD");
      this.sendMessage();
    });
    res.catch(reject => console.log(reject));
  }
}

