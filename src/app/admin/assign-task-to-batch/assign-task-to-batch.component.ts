import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AssigningTask } from 'src/app/models/assigning-task.model';
import { RepositryService } from 'src/app/service/repository.service';

@Component({
  selector: 'app-assign-task-to-batch',
  templateUrl: './assign-task-to-batch.component.html',
  styleUrls: ['./assign-task-to-batch.component.css']
})
export class AssignTaskToBatchComponent implements OnInit {

  public minDate?: Date;
  newTaskAssign= new AssigningTask
  listOfOrganization:string[]=['CoreNuts','Feuji','Jspider']
  listOfBranches:string[]=['c1','c2','c3','f1','f2','j1']
  selectedOrganization?:string
  selectedBranch?:string
  selectedBatch?:string
  listOfBatch?:string[]=['m1','m2','m3','m4']
  listOfTasks:string[]=[
    'prime number',
    'strong number',
    'prime number',
    'strong number',
    'prime number',
    'even number',
    'strong number'
  ]
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  searchControl = new FormControl();

  selectedSubject?:string
  seletedTask?:string
  listOfSubject?:string[]=['python','java','angular']


  constructor(private repo:RepositryService) {
    this.minDate = new Date();
   }

  ngOnInit(): void {

  }
  assignTask(ngform:NgForm){
    console.log(this.newTaskAssign)
    if (this.selectedBatch!=null && this.selectedOption!=null){
      this.newTaskAssign.batch_id=this.listOfBatch?.indexOf(this.selectedBatch)
      this.newTaskAssign.assingment_id=this.listOfTasks.indexOf(this.selectedOption)
    }
    console.log(this.newTaskAssign)
    this.repo.assignNewTaskForstudent(this.newTaskAssign)

  }
  onOrganizationselection(){

  }
  onBranchselectinon(){

  }
  onBatchselection(){

  }
  onSubjectselection(){

  }


  public selectedOption: string="";

  filterOptions(searchTerm: string): string[] {
    return this.listOfTasks.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  toggleOptionsContainer(): void {

    const optionsContainer = document.querySelector('.options-container');
    if (optionsContainer) {
      optionsContainer.classList.toggle('show');
      // optionsContainer.classList.toggle('show');
    }
  }
  onOptionSelected(option: string): void {
    // Sets the selected option and closes the options container
    this.selectedOption = option;
    this.toggleOptionsContainer();
  }
  closeOptionsContainer(){

  }


}
