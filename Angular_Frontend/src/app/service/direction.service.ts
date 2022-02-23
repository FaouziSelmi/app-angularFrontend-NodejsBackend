import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Direction } from '../entity/direction';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  private baseURLget="http://localhost:3000/directions";
  
  constructor(private httpClient: HttpClient) { }

  getDirectionList(): Observable<Direction[]>{
    return this.httpClient.get<Direction[]> (`${this.baseURLget}`);
  }
}
