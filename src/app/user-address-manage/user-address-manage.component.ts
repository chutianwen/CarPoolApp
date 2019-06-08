///<reference path="../../../node_modules/rxjs/Observable.d.ts"/>
import {Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild,Input, HostListener} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from 'rxjs/Observable';
import {MapsAPILoader} from "@agm/core";
import {FormControl} from "@angular/forms";
// this is very necessary, otherwise namespace 'google' cannot be found.
import {} from '@types/googlemaps';
import {trigger, state, style, transition,animate, keyframes} from '@angular/animations';
//import {FilterPipe} from './filter.pipe';
//import {trigger, state, style, animate, transition} from '@angular/animations';

export interface userActivity {
  // fields from input documents
  // !userName cannot be empty String.
  userName: string;
  arrival: string;
  departure: string;
  role: string;
  address: string;
  phone: string;
  price: number;
  memo: string;
}

/**
 * Send userData to MapComponent, for displaying on Map.
 */
export class messageToMapComponent {
  constructor(public userName: string, public address: string,
              public arrival: string, public departure: string,
              public role: string, public phone: string
              ) {
  }
}

// @Pipe()
@Component({
  selector: 'app-user-address-manage',
  templateUrl: './user-address-manage.component.html',
  styleUrls: ['./user-address-manage.component.css'],
  // pipes: [FilterPipe]
  animations: [
    trigger('focusPanel', [
      state('inactive', style({
        // transform: 'scale(1)',transform: 'translateY(0%)',
        backgroundColor: '#eee'
      })),
      state('active', style({
        // transform: 'scale(1.1)',transform:'translateY(-80%)',
        bottom:0,
        backgroundColor: '#f6f6f6'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ]),

  ]
})



export class UserAddressManageComponent implements OnInit {
  //@Output() updateForm: EventEmitter<any> = new EventEmitter<any>();rui
  // message sender
  @Output() messageEvent = new EventEmitter<Array<messageToMapComponent>>();
  searchText: string;
  // ng-models, binding fields from user input data.
  userName: string = "Jing";
  arrival: string = "9:00a.m.";
  departure: string = "5:30p.m.";
  role: string = "";
  address: string = "";
  phone: string = "";
  price: number = 4;
  memo: string = "";
  // defining animation state
  state: string = 'inactive';


  public searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef;

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

  @HostListener('window:scroll', ['$event'])

  toggleMove() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

  onScroll($event){
    console.log($event);
    this.toggleMove();
  }

  /**
   * Sent userAddressDataMessageSent to parent component GoogleMapComponent
   * Sent userAddressDataMessageSent to parent component GoogleMapComponent
   */
  sendMessage() {
    this.messageEvent.emit(this.userAddressDataMessageSent);
  }

  /**
   * Submit userInput data to firebase.
   */
  submit() {
    // if address still empty, that means address is not parsed by geoCoding yet, redo
    // In real time, this will prevent user submit wrong address. Since hit "enter" will call
    // submit() automatically. User may insert the old address to firebase.
    if(this.address != "") {
      // address got new value
      this.userActivityCollection.doc(this.userName).set({
        userName: this.userName,
        arrival: this.arrival,
        departure: this.departure,
        role: this.role,
        address: this.address,
        phone: this.phone,
        price: this.price,
        memo: this.memo
      }).catch((err) => {
        // alert(err);
        console.log(err);
      });
      // reset ngModel address
      this.address = "";
    }
    this.toggleMove();
    // reset address
  }

  constructor(private db: AngularFirestore, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    this.userActivityCollection = db.collection("userActivityCollection");
    this.userActivities = this.userActivityCollection.valueChanges();
    let res = this.userActivities.forEach(x => {
      this.userAddressDataMessageSent = x.map(doc => {
        return new messageToMapComponent(
          doc.userName,
          doc.address,
          doc.arrival,
          doc.departure,
          doc.role,
          doc.phone
        );
      });
      this.sendMessage();
    });
    res.catch(reject => console.log(reject));
  }

  ngOnInit() {
    //create search FormControl
    this.searchControl = new FormControl();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.address = place.formatted_address;
        });
      });
    });
  }
}

