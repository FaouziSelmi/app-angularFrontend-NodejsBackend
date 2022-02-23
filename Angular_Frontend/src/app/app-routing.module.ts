import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDirectionComponent } from './create-direction/create-direction.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {path :'employees', component: EmployeeListComponent},
  {path :'addEmployee', component: CreateEmployeeComponent},
  {path :'addDirection', component: CreateDirectionComponent},
  {path:'', redirectTo: 'employees', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
