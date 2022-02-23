import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../entity/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURLget="http://localhost:3000/employees";
  private baseURLAdd="http://localhost:3000/addEmployee";
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]> (`${this.baseURLget}`);
  }
  createEmployee(employee:Employee): Observable<object>{
    return this.httpClient.post(`${this.baseURLAdd}`,employee);
  }
}
