import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'src/app/models/subject_deails.model';
import { Topic } from 'src/app/models/topic.model';
import { RepositryService } from 'src/app/service/repository.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  selectedSubject?:Subject
  listOfsubjects:Subject[]=[]

  newTopic=new Topic
  constructor(private repo:RepositryService) { }

  ngOnInit(): void {
    // this.listOfsubjects=this.repo.getallSubjects()
  }

  addTopic(form:NgForm){
    this.newTopic.created_on=new Date()
    if(this.selectedSubject!=null){


    }
    console.log(this.newTopic);
    this.repo.addTopic(this.newTopic)


  }
  onsubjectselection(){
console.log(this.selectedSubject?.subject_id)
  }
}
