import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

  isSideNavOpened:boolean=false
  ngOnInit(): void {
  }

  constructor() { }


  toggleSideNav() {
    this.isSideNavOpened = !this.isSideNavOpened;
  }
  isAdmin=true
}
