import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StudentHomepageComponent } from './student-homepage/student-homepage.component';
import { TaskpageComponent } from './taskpage/taskpage.component';





import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PendingtaskComponent } from './pendingtask/pendingtask.component';
import { CompletedTaskComponent } from './completed-task/completed-task.component';
import { ProfileComponent } from './profile/profile.component';


let routing=RouterModule.forChild([
  {
    path:"",
    component:StudentHomepageComponent,
    children:[
      {
        path:'task',component:TaskpageComponent
      },
      {
        path:'pendingtask',component:PendingtaskComponent
      },
      {
        path:'completedtask',component:CompletedTaskComponent
      },
      {
        path:'profile',component:ProfileComponent
      },

    ]

  },
  {
    path:'**',redirectTo:""
  }
])

@NgModule({

  imports: [
    MatSlideToggleModule,
    routing,
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],

  declarations: [
    TaskpageComponent,StudentHomepageComponent, PendingtaskComponent, CompletedTaskComponent, ProfileComponent
  ],


})
export class StudentModule { }
