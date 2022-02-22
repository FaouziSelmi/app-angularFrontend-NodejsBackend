import { Component, OnInit } from '@angular/core';
import { Employee } from '../entity/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees : Employee[];
  constructor( private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

private getEmployees(){
this.employeeService.getEmployeeList().subscribe(data=>{
  this.employees=data;
  console.log("the data is "+ data);
})
}
}
