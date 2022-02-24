import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDirectionComponent } from './create-direction/create-direction.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path :'employees', component: EmployeeListComponent},
  {path :'addEmployee', component: CreateEmployeeComponent},
  {path :'addDirection', component: CreateDirectionComponent},
  {path :'editEmployee/:id', component: UpdateEmployeeComponent},
  {path :'employeeDetails/:id', component: EmployeeDetailsComponent},
  {path:'', redirectTo: 'employees', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
