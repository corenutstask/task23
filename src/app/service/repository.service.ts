import { Subject } from 'src/app/models/subject_deails.model';
import { Injectable } from '@angular/core';
import { Login, User } from '../models/user-profile.model';
import { RestDataService } from './rest-data.service';
import { Organization } from '../models/organigation.model';
import { Branch } from '../models/branch.model';
import { Topic } from '../models/topic.model';
import { Batch } from '../models/batch.model';
import { AssigningTask } from '../models/assigning-task.model';
import { Assingment } from '../models/assingment.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RepositryService {

  listOfOrganizations:Organization[]=[]
  listOfBranches:Branch[]=[]
  lisOfSubjects:Subject[]=[]
  listOfBatchs:Batch[]=[]
  constructor(private restdata:RestDataService,private router:Router) { }

  // * Login Opations
login(user:Login){
  console.log(user)
  this.restdata.login(user).subscribe(
    (respose)=>{
      console.log(respose)
      localStorage.setItem("token", respose["token"]);
      localStorage.setItem("role", respose["roles"][0]);
      localStorage.setItem('id',respose.id)
      if(localStorage.getItem("role")=="admin"){
        this.router.navigateByUrl('/admin')
      }

    },
    (error)=>{
      console.log(error);

    }
  )
}


// *gatting the id of the Curent User (or) Admin

gettingAdminID(){
  var user=localStorage.getItem('user')
  if(user!=null){
   return JSON.parse(user).id
  }
}

// * Admin Oparations
  addAdmin(newUser:User){
    this.restdata.addAdmin(newUser).subscribe(
      (response)=>{

      },
      (error)=>{
       console.log(error)
      }
    )
  }


// * Organization Oparations
  addOrganization(organization:Organization){
  console.log(organization,"this is the organization from repositry service")
  this.restdata.addOrganization(organization).subscribe(
    (response)=>{
      console.log(response)
    },
    (error)=>{
      alert("organization")

    }
  )
}

get getallOrganizations(){
return this.restdata.getallOrganizations()
}

updateOrganization(org:Organization){

  this.restdata.updateOrganization(org).subscribe(
    (response)=>{
      console.log('ok')
    },
    (error)=>{

    }
  )
}

deleteOrganization(id:number){
  this.restdata.deleteOrganization(id).subscribe(
    (response)=>{
      console.log("okk")
    },
    (error)=>{
      alert('error')
    }
  )
}




// * Branch Oparations

addBranch(branch:Branch){

  console.log('this branch from repo',branch)
  this.restdata.addBranch(branch).subscribe(
    (response)=>{
      console.log(response)

    },
    (error)=>{
      alert('Working Branch')
    }
  )
}
get getallBranches(){
  return this.restdata.getallBranches()
}

deleteBranch(id:number){
  this.restdata.deleteBranch(id).subscribe(
    (response)=>{
      alert('ok')
    },
    (error)=>{

    }
  )

}
updateBranch(branch:Branch){
  console.log("this Branch from repo",branch);
  this.restdata.updateBranch(branch).subscribe(
    (respose)=>{
      alert("updated");
    },
    (error)=>{
      alert('error')
    }
  )
}
// *subject Oparations

addSubject(subject:Subject){
  console.log("this Subject from Repo",subject)
  this.restdata.addSubject(subject).subscribe(
    (response)=>{
      console.log(response)
    },
    (error)=>{
      alert('Subject Workings')
    }
  )
}
getallSubjects(){
  return this.restdata.getallSubjects()
}
deleteSubject(id:number){
  this.restdata.deleteSubject(id).subscribe(
    (response)=>{
      console.log("subject deleted successfully",response)
    },
    (error)=>{
      console.log("smothing went wrong in deleting subject",error);

    }
  )

}

// * Topic Oparations

addTopic(topic:Topic){
  console.log("this topic from repo",topic);
  this.restdata.addTopic(topic).subscribe(
    (response)=>{
      console.log(response)

    },
    (error)=>{
      alert("Topic Working Fine ")
    }
  )


// * Batch Oparations

}
addBatch(batch:Batch){
  console.log("this is we are getting form the repo",batch)
  this.restdata.addBatch(batch).subscribe(
    (response)=>{
      console.log(response)
    },(error)=>{
      alert("Add batch working fine")
    }
  )

}
get getlistOfBatchs(){
  return this.restdata.gellallBatchs()
}
deleteBatch(id:number){
  this.restdata.deleteBatch(id).subscribe(
    (response)=>{
      console.log("Subject deleted successfully");

    },
    (error)=>{
      alert("somthing went wrong in deleting subject ")
    }
  )
}
// * Assignment Oparations
addAssginment(assignment:Assingment){
  console.log("This assignment data ", assignment)
  this.restdata.addAssignment(assignment).subscribe(
    (responce)=>{
      console.log(responce)
    },
    (error)=>{
      console.log(error)
      alert("Error in adding assigments")
    }
  )

}

assignNewTaskForstudent(newTask:AssigningTask){
  console.log(newTask);
  this.restdata.assignNewTaskForstudent(newTask).subscribe(
    (responce)=>{
      console.log(responce)
    },
    (error)=>{
      alert("Error in adding assigments")
    }
  )

}

}
