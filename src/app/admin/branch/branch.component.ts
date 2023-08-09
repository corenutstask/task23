import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Branch } from 'src/app/models/branch.model';
import { Organization } from 'src/app/models/organigation.model';
import { RepositryService } from 'src/app/service/repository.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  newbranch=new Branch
  selectedOrganization?:number
  isaddingBranch:boolean=false
  saveOrUpadate:boolean=true

  listOfOrganizations?:Organization[]
  listOfBranches:Branch[]=[]
  organizationnumber?:number
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
  this.repo.getallBranches.subscribe(
    (response)=>{
      this.listOfBranches=response
    },
    (error)=>{
      // alert("error in getting all organizations")
      console.log(error)
    }

  )

  }

  ngOnInit(): void {
  }
  addBranch(ngform:NgForm,mode:boolean){
    console.log(this.newbranch,"this this brach from Component")
    this.newbranch.created_admin=1
    this.newbranch.created_on=new Date()
    this.newbranch.organization_id=this.organizationnumber
    if(mode==true){
      this.repo.addBranch(this.newbranch)
    }
    else{
      this.repo.updateBranch(this.newbranch)
    }

  }

  onOrganizationselection(){
    console.log(this.selectedOrganization)
    if(this.selectedOrganization!=null){
      this.organizationnumber=this.selectedOrganization
      console.log(this.selectedOrganization,"---------------")
    }
    console.log(this.newbranch,"final brach json format")
  }
  getOrganizationName(id:number |undefined){
    return this.listOfOrganizations?.filter(e=>e.organization_id==id)[0].organization_name
  }
  mode(mode:string){
    if(mode=='adding'){
      this.newbranch=new Branch
      this.isaddingBranch=true
    }
    else if (mode == 'display') {
      this.isaddingBranch=false
      this.saveOrUpadate=true
    }

  }
  deleteBranch(id:number|undefined){
    console.log("delete branch",id);
    if(id!=undefined){
    this.repo.deleteBranch(id)
    }
  }
  editing(id:number|undefined){

    this.newbranch=this.listOfBranches?.filter(e=>e.branch_id==id)[0]
    this.isaddingBranch=true
    this.saveOrUpadate=false
    console.log(this.newbranch);


  }
  get listBranches():Branch[]{
    return this.listOfBranches
  }
}
