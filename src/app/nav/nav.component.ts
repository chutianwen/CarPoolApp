import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  apps: Array<any>;
  constructor() { }

  ngOnInit() {
    // this.apps = [
    //   {
    //     label: 'CRD Classic',
    //     url: 'https://soundcloud.com/the-finance-guru'
    //   },
    //   {
    //     label: 'IARD',
    //     url: 'https://soundcloud.com/the-finance-guru'
    //   },
    //   {
    //     label: 'PFRD',
    //     url: "https://www.kuum.jp/"
    //   }
    // ];
  }

}
