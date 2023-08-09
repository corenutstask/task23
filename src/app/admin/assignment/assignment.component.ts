import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Assingment } from 'src/app/models/assingment.model';
import { RepositryService } from 'src/app/service/repository.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  newAssignment=new Assingment
  selectedsubject?:string
  listofsubjects?:string[]=['python','java','angular','html','css']
  public minDate?: Date;
  listOfTopics:string[]=['Number Programs ','OOPS','Loops','Execptions',]
  listOfSubTopics:string[]=['prime','emirp','strong','week','pallindrome']


  public selectedTopic: string="";
  public selectedSubTopic: string="";

  constructor(private repo:RepositryService) {
    this.minDate = new Date();
   }

  ngOnInit(): void {
  }


  addAssingment(form:NgForm){
    if (this.selectedsubject!=null){
      this.newAssignment.subject_id=this.listofsubjects?.indexOf(this.selectedsubject)
    }
    this.newAssignment.created_by=this.repo.gettingAdminID()
    this.newAssignment.created_on=new Date()
    this.newAssignment.topic_id=this.getTopicId(this.selectedTopic)
    console.log(this.newAssignment)

    this.repo.addAssginment(this.newAssignment)

  }
  onsubjectchange(){

  }




// * for topic choosing

  filterTopic(searchTerm: string): string[] {
    return this.listOfTopics.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    }

    onOptionSelected(topic: string): void {
      // Sets the selected option and closes the topic container
      this.selectedTopic = topic;
      this.toggleOptionsContainer();
    }
    toggleOptionsContainer(): void {

      const optionsContainer = document.querySelector('.topic-container');
      if (optionsContainer) {
        optionsContainer.classList.toggle('show');
      }
    }
  closeOptionsContainer() {

  }


  getTopicId(topicName:string):number{
    const id=this.listOfTopics.indexOf(topicName)
    console.log(id,'--------------------');
    return id

  }


  // * for sub Topic

  filterSubTopic(searchTerm: string): string[] {
    return this.listOfSubTopics.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    }

    onsubTopicSelected(subtopic: string): void {
      // Sets the selected option and closes the topic container
      this.selectedSubTopic = subtopic;
      this.toggleOptionsContainerForSub();
    }
    toggleOptionsContainerForSub(): void {

      const optionsContainer = document.querySelector('.sub-topic-container');
      if (optionsContainer) {
        optionsContainer.classList.toggle('show');
      }
    }


}
