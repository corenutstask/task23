import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-homepage',
  templateUrl: './student-homepage.component.html',
  styleUrls: ['./student-homepage.component.css']
})
export class StudentHomepageComponent implements OnInit {
  isSideNavOpened:boolean=false
  ngOnInit(): void {
  }

  constructor() { }


  toggleSideNav() {
    console.log("sideeeeee")
    this.isSideNavOpened = !this.isSideNavOpened;
  }
  isAdmin=true
}
