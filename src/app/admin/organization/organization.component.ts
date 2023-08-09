import { NgForm } from '@angular/forms';
import { Organization } from './../../models/organigation.model';
import { Component, OnInit } from '@angular/core';
import { RepositryService } from 'src/app/service/repository.service';
import { User } from 'src/app/models/user-profile.model';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  newOrganizaion=new Organization();
  currentAdmin?:User
  curentStatus:boolean=false;
  saveOrUpadate:boolean=false;
  listOfOrganizations:Organization[]=[]
  constructor(private repo:RepositryService) {
    this.repo.getallOrganizations.subscribe(
      (response)=>{
        this.listOfOrganizations=response
        return this.listOfOrganizations
      },
      (error)=>{
        // alert("error in getting all organizations")
        console.log(error)
        return this.listOfOrganizations
      }
    )
  }

  ngOnInit(): void {
  var user= localStorage.getItem('id')
  if(user!=null){
   this.currentAdmin=JSON.parse(user)
  }


  }
 addOrganization(ngForm:NgForm,mode:boolean){
    console.log(this.newOrganizaion)
    this.newOrganizaion.created_on=new Date()
    this.newOrganizaion.created_by=this.currentAdmin?.user_id
    console.log(this.newOrganizaion)
    if(mode==true){
      console.log('this block is used to add Organization')
      this.repo.addOrganization(this.newOrganizaion)

    }
    else{
     this.repo.updateOrganization(this.newOrganizaion)

    }
  }
  get getAllOrganizations(){
    console.log(this.repo.listOfOrganizations,"kjvjdbvdvbd")
    return this.listOfOrganizations
  }

  panelStatus(status:string){
    console.log("panel status",status);
    if(status==='adding'){
      this.curentStatus = true
      this.newOrganizaion= new Organization()
      this.saveOrUpadate=true
    }
    else if(status==='display'){
      this.curentStatus=false
    }
  }
  editing(id:number|undefined){
    this.curentStatus = true
    this.saveOrUpadate=false
    this.newOrganizaion=this.listOfOrganizations.filter(e=>e.organization_id==id)[0]

  }
  deleteOrganization(id:number|undefined){
    if(id!=undefined){
      this.repo.deleteOrganization(id)
      const org=this.repo.listOfOrganizations.filter(e=>e.organization_id==id)
      //  this.repo.listOfOrganizations.pop(org)
    }
    else{
      alert('somthing went wrong')
    }
  }
}
