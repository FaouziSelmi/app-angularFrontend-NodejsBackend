import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Direction } from '../entity/direction';
import { Employee } from '../entity/employee';
import { DirectionService } from '../service/direction.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees : Employee[];
public directions: Direction[];
  constructor( private employeeService: EmployeeService, 
    private router:Router, private directionService: DirectionService) { }

  ngOnInit(): void {
    this.getEmployees();
   this.getDirections();
   
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
  private getDirections(){
    this.directionService.getDirectionList().subscribe(data=>{
      this.directions=data;
      console.log("the data is "+ data);
    })
    }
    getEmployeByDir( idDir: number){
    
    }
}
