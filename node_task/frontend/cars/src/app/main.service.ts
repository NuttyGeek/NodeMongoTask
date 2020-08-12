import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Car, CarsResult } from './car';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) {
  }

  getCars(): Observable<CarsResult> {
    return this.http.get('http://localhost:3000/cars')
    .pipe(
      map((cars: Car[])=>{
        console.log(':: look', cars);
        return {
          Q1: cars.filter((item: Car) => item.quarter==='Q1'),
          Q2: cars.filter((item: Car) => item.quarter==='Q2'),
          Q3: cars.filter((item: Car) => item.quarter==='Q3'),
          Q4: cars.filter((item: Car) => item.quarter==='Q4')
        }
      }),
      catchError(() => throwError(new Error('Error getting Cars from Server'))
      ));
  }

}
