import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  @Input() aPerson;
  @Output() smacked= new EventEmitter(); 

  title: string = 'About Us';

  constructor() { }

  ngOnInit() {
  }
  // snack(){
  //   window.alert("selected");
  //   this.smacked.emit(this.aPerson);
  // }

}
