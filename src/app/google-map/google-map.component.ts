import { Component, OnInit} from '@angular/core';
import {geocode} from 'google-geocoding/index.js'
import {messageToMapComponent} from "../user-address-manage/user-address-manage.component";

class marker {
  constructor(public userName:string = "", public lat:number = 0, public lng:number =0){}
}

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})

export class GoogleMapComponent implements OnInit {

  // Metrics of initializing Map Display
  title: string = 'Car Pool Map';
  zoom: number = 8;
  // initial center position for the map (DC)
  lat: number = 38.9459997;
  lng: number = -77.32774049999999;

  // receive by child component user-address-manage.component
  userAddressDataMessageReceive: Array<messageToMapComponent>;

  // markers gonna shown on map
  markers: Array<marker>;

  // function from google-geocoding/index.js
  google_geocoding = geocode;

  receiveMessage(event){
    this.userAddressDataMessageReceive = event;
    this.markers = this.userAddressDataMessageReceive.map(msg => this.messageToMarker(msg));
  }

  /**
   * Convert User Message To a Marker on Map
   * @param {messageToMapComponent} msg
   * @returns {marker}
   */
  messageToMarker(msg:messageToMapComponent): marker{
    // Needs to define an instance of marker here, since geocoding below not returns any marker.
    let currentMarker = new marker(msg.userName, this.lat, this.lng);
    this.google_geocoding(msg.address, function (err, location) {
      if (err) {
        // console.log('Error: ' + err);
      } else if (!location) {
        // console.log('No result.');
      } else {
        // console.log(address + 'Latitude: ' + location.lat + ' ; Longitude: ' + location.lng);
        currentMarker.lat = location.lat;
        currentMarker.lng = location.lng;
      }
    });
    return currentMarker;
  }

  /**
   * For debugging
   */
  showAddresses(){
    console.log("showing userAddressDataMessage:");
    console.log(this.userAddressDataMessageReceive);
    console.log("showing markers");
    console.log(this.markers);
  }
  constructor() { }

  ngOnInit() {
  }
}
