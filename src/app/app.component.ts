import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  lat2: number = 59.678418;
  lng2: number = 9.809007;
}
