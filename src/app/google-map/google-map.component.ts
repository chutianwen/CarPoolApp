import { Component, OnInit, ViewChild } from '@angular/core';
import {UserAddressManageComponent} from "../user-address-manage/user-address-manage.component";

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})

export class GoogleMapComponent implements OnInit {

  @ViewChild(UserAddressManageComponent) userAddressManageComponent:UserAddressManageComponent;

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  lat2: number = 59.678418;
  lng2: number = 9.809007;

  constructor() { }

  ngOnInit() {
  }

  test(){
    UserAddressManageComponent.showTest();
  }
}
