import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/models/user-profile.model';
import { RepositryService } from 'src/app/service/repository.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private repo:RepositryService) { }

  ngOnInit(): void {
  }
  currentUser=new Login
  login(form:NgForm){

    this.repo.login(this.currentUser)

  }
}
