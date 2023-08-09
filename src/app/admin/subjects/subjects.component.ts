import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'src/app/models/subject_deails.model';
import { RepositryService } from 'src/app/service/repository.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  newsubject=new Subject
  isaddingsubject:boolean=false
  listOfSubjects:Subject[]=[]
  constructor(private repo:RepositryService) {
    this.repo.getallSubjects().subscribe(
      (respose)=>{
        this.listOfSubjects=respose
      },
      (error)=>{
        alert("somthing went wrong")
      }
    )
  }

  ngOnInit(): void {

  }

  addSubject(form:NgForm){
    this.newsubject.created_on=new Date()
    console.log(this.newsubject,"we getting from the component")
    this.newsubject.created_by=this.repo.gettingAdminID()
    this.repo.addSubject(this.newsubject)
    this.listOfSubjects.push(this.newsubject)
  }
  deleteSubject(id:number|undefined){
    if (confirm("Are you sure to remove it?")&& id!=undefined){
      this.repo.deleteSubject(id)
      this.listOfSubjects=this.listOfSubjects.filter(e=>e.subject_id!=id)
    }
  }
  editSubject(id:number|undefined){

  }
}
