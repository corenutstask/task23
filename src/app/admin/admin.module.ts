import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { OrganizationComponent } from './organization/organization.component';
import { BranchComponent } from './branch/branch.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { BatchComponent } from './batch/batch.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AssignTaskToBatchComponent } from './assign-task-to-batch/assign-task-to-batch.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ProfileComponent } from './profile/profile.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { TopicComponent } from './topic/topic.component';

// import { NgSelectModule } from '@ng-select/ng-select';

let routing = RouterModule.forChild([
  {
    path: "",
    component: AdminHomepageComponent,
    children: [
      {
        path: "add-admin", component: AddAdminComponent
      },
      {
        path: "organization", component: OrganizationComponent
      },
      {
        path: "branch", component: BranchComponent
      },
      {
        path: "batch", component: BatchComponent
      },
      {
        path: "subjects", component: SubjectsComponent
      },
      {
        path: "assing-task", component: AssignTaskToBatchComponent
      },
      {
        path: "profile", component: ProfileComponent
      },
      {
        path: "assingmests", component: AssignmentComponent
      },
      {
        path: "topic", component: TopicComponent
      },
      {
        path: "**", redirectTo: "organizations"
      },
    ]
  },
  {
    path: '**', redirectTo: ""
  }
])

@NgModule({

  imports: [
    routing,
    FormsModule, CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  //  NgSelectModule,

  ],

  declarations: [
    AdminHomepageComponent,
    AddAdminComponent,
    AssignmentComponent,
    AssignTaskToBatchComponent,
    BatchComponent,
    BranchComponent,
    SubjectsComponent,
    AddAdminComponent,
    OrganizationComponent,
    ProfileComponent,
    TopicComponent,
  ],

})
export class AdminModule { }
