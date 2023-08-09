import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user-profile.model';
import { RepositryService } from 'src/app/service/repository.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  newUser= new User()
  constructor(private repo:RepositryService) { }
  ngOnInit(): void {
  }
  addFloor(form:NgForm){
      this.newUser.created_on=new Date()
      this.newUser.role='admin'
      this.newUser.status='active'
      console.log(this.newUser)
    return this.repo.addAdmin(this.newUser)
  }
}
