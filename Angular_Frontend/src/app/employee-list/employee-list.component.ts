import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../entity/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees : Employee[];
  constructor( private employeeService: EmployeeService, 
    private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

private getEmployees(){
this.employeeService.getEmployeeList().subscribe(data=>{
  this.employees=data;
  console.log(data);
})
}
updateEmployee(id:number){
this.router.navigate(['editEmployee', id])
}
deleteEmployee(id:number){
this.employeeService.deleteEmployee(id).subscribe(data =>{
  //console.log(data);
 //this.getEmployees();
 //this.employees = this.employees.filter(item => item.idEmp != id);

})
//window.location.reload();
this.getEmployees();
}
detailsEmployee(id:number){
  this.router.navigate(['employeeDetails', id])
  }
}
