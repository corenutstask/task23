import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Batch } from 'src/app/models/batch.model';
import { Branch } from 'src/app/models/branch.model';
import { Organization } from 'src/app/models/organigation.model';
import { Subject } from 'src/app/models/subject_deails.model';
import { RepositryService } from 'src/app/service/repository.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  newBatch=new Batch()
  selectedOrganization?:number
  selectedBranch?:number
  listOfOrganizations:Organization[]=[]
  listOfBranches:Branch[]=[]
  listOfSubjects:any[] =[]
  listDummy:string[]=[]
  listOfSubjects1:Subject[]=[]
  isaddingBatch:boolean=false
  listOfBatchs:Batch[]=[]
  selectedOptions: { [key: string]: boolean } = {};
  saveOrUpadate:boolean=false


  constructor(private repo: RepositryService) {
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
  this.repo.getlistOfBatchs.subscribe(
    (response)=>{
      this.listOfBatchs=response
      return this.listOfOrganizations
    },
    (error)=>{
      console.log(error)
      return this.listOfOrganizations
    }
  )

  this.repo.getallSubjects().subscribe(
    response=>{
      this.listOfSubjects1=response
      this.listOfSubjects=this.listOfSubjects1.filter(e=>e.subject_name!=null).map(e=>e.subject_name)

    },
    error=>{
      console.log('Error while fetching subjects',error);
    }
  )


   }
  ngOnInit(): void {
  }
  addBatch(form:NgForm){
    if(this.selectedBranch!=null){
      this.newBatch.branch_id=this.selectedBranch
    }
    this.newBatch.created_by=this.repo.gettingAdminID()
    this.newBatch.created_on=new Date()
    console.log(this.newBatch)
    this.repo.addBatch(this.newBatch)

  }
  onOrganizationselection(){
    // this.listOfBranches= this.repo.getallBranches
   this.listOfBranches= this.listOfBranches?.filter(
      e=>e.organization_id==this.selectedOrganization
    )
    console.log(this.listOfBranches,'---------------')
    }
  onBranchselectinon(){
    console.log(this.selectedBranch,"--------------")
    this.newBatch.branch_id=this.selectedBranch

  }
  updateSelectedOptions() {
    // Extract the selected options into a list
    const selected= Object.keys(this.selectedOptions).filter(option => this.selectedOptions[option]);
    console.log('Selected options:', selected);

    const selectedSubujectid=selected.map(e=>this.getSubid(e))
    console.log(selectedSubujectid)
    this.newBatch.subjects=selectedSubujectid
    // You can use this 'selected' list for further processing or store it in your desired data structure.
  }
  getSubid(subName:string){
      return this.listOfSubjects1.filter(e=>e.subject_name==subName)[0].subject_id
  }
  deleteBatch(id:number|undefined){
    if(id!=null){
    this.repo.deleteBatch(id)
    this.listOfBatchs=this.listOfBatchs.filter(e=>e.batch_id!=id)

    }
  }
  editBranch(id:number|undefined){
    this.newBatch=this.listOfBatchs?.filter(e=>e.batch_id==id)[0]
    const sub=this.newBatch.subjects
    console.log(this.newBatch,"---------------")
    console.log(this.listOfSubjects1)
    if(sub!=undefined){
      const subname=this.listOfSubjects1.filter(sub1=>sub.includes(sub1.subject_id))
      const subName=subname.map(e=>e.subject_name)
      console.log(subName);
      subName.forEach(
      e=>{
       if(e!=null){
        this.selectedOptions[e] = true;
       }
      }
      )
    }



    this.saveOrUpadate=true
  }
  getbachlocation(id:number |undefined){

    return this.listOfBranches?.filter(e=>e.branch_id==id)[0].branch_location
  }
  mode(mode:string){
    if(mode=='adding'){
      this.saveOrUpadate=true
    }
    else if(mode =='cancle'){
      this.saveOrUpadate=false
      this.selectedOptions={}
    }
  }
}
