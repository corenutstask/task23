import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { HomepageComponent } from './home/homepage/homepage.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'home',component:HomepageComponent
  },

  {
  path:"student",
  loadChildren:()=> import('./student/student.module').then(a=>a.StudentModule)
  },
  {
    path:"admin",
    loadChildren:()=> import('./admin/admin.module').then(a=>a.AdminModule)
    },
{
  path:'**',redirectTo:'home'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ComponentArryy=[
  LoginComponent,
  RegisterComponent,
  HomepageComponent,
]
