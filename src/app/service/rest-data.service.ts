import { Subject } from 'src/app/models/subject_deails.model';
import { Organization } from './../models/organigation.model';
import { Injectable } from '@angular/core';
import { Login, User } from '../models/user-profile.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Branch } from '../models/branch.model';
import { Topic } from '../models/topic.model';
import { Batch } from '../models/batch.model';
import { Assingment } from '../models/assingment.model';
import { AssigningTask } from '../models/assigning-task.model';

@Injectable({
  providedIn: 'root'
})
export class RestDataService {
  baseUrl:string="http://localhost:9042/"

  constructor(private http:HttpClient) { }

// *
login(user:Login):Observable<any>{
  return this.http.post(this.baseUrl+"users/login",user)

}




  addAdmin(user:User):Observable<any>{
    return this.http.post(this.baseUrl+"organization",user)
  }


  // *organizations Oparations

  addOrganization(organization:Organization):Observable<any>{
    return this.http.post(this.baseUrl+"organization",organization)
  }

  getallOrganizations():Observable<any>{
  return this.http.get("http://localhost:9042/organization")
  }
  updateOrganization(org:Organization):Observable<any>{
    return this.http.put(this.baseUrl+'organization',org)

  }
  deleteOrganization(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+"organization/"+id)
  }

  // * Branch Oparations

  addBranch(brach:Branch):Observable<any>{
    return this.http.post(this.baseUrl+"branch",brach)
  }
  getallBranches():Observable<Branch[]>{
    return this.http.get<Branch[]>(this.baseUrl+"branch")
  }
  deleteBranch(id:number){
    return this.http.delete(`${this.baseUrl}branch/${id}`)
  }
  updateBranch(branch:Branch){
    return this.http.put(this.baseUrl+"branch",branch)
  }


  // *subject Oparations

  addSubject(subject:Subject):Observable<any>{
    console.log('-----------------')
    return this.http.post(this.baseUrl+"subject",subject)
  }

  getallSubjects():Observable<Subject[]>{
    return this.http.get<Subject[]>(this.baseUrl+"subject")
  }
  deleteSubject(id:number){
    return this.http.delete(this.baseUrl+"subject/"+id)

  }

  // * Topic oparations
  addTopic(topic:Topic):Observable<any>{
    return this.http.post(this.baseUrl+"topic",topic)
  }

  // *Batch Opatations
  addBatch(batch:Batch):Observable<any>{

    return this.http.post(this.baseUrl+"batch",batch)
  }

  gellallBatchs():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+"batch")
  }
  deleteBatch(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+"batch/"+id)
  }

  // * Assignment Oparations

  addAssignment(assignment:Assingment):Observable<any>{
    console.log("add assignment",assignment);
    return this.http.post(this.baseUrl,assignment)
  }

  // * assignNewTaskForstudent

  assignNewTaskForstudent(task:AssigningTask):Observable<any>{

    return this.http.post(this.baseUrl,task)

  }
}
