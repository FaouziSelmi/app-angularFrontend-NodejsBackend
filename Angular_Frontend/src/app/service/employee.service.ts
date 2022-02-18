import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../entity/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL="http://localhost:3000/employees";
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]> (`${this.baseURL}`);
  }
}
