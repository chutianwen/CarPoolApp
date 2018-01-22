import { Component, OnInit} from '@angular/core';
import { MouseEvent } from '@agm/core';
import {geocode} from 'google-geocoding/index.js'

class marker {
  lat: number = 0;
  lng: number = 0;
  constructor(x, y){
    this.lat = x;
    this.lng = y;
  }
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

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
    });
  }

  // receive by child component user-address-manage.component
  addresses: Array<string>;

  markers: marker[];

  // function from google-geocoding/index.js
  google_geocoding = geocode;

  receiveMessage($event){
    this.addresses = $event;
    this.markers = this.addresses.map(x => this.addressToLongLat(x));
  }

  addressToLongLat(address:string): marker{
    let res = new marker(0, 0);
    this.google_geocoding(address, function (err, location) {
      if (err) {
        // console.log('Error: ' + err);
      } else if (!location) {
        // console.log('No result.');
      } else {
        // console.log(address + 'Latitude: ' + location.lat + ' ; Longitude: ' + location.lng);
        res.lat = location.lat;
        res.lng = location.lng;
      }
    });
    return res;
  }

  /**
   * For debugging
   */
  showAddresses(){
    console.log(this.google_geocoding);

    console.log("showing addresses:");
    console.log(this.addresses);
    console.log("showing markers");
    console.log(this.markers);
  }

  constructor() { }

  ngOnInit() {
  }
}
