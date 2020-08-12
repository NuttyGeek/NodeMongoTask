import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { map } from 'rxjs/operators';
import { Car, CarsResult } from '../car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quarterOptions: string[];
  selectedQuarter: string;
  carsResult: CarsResult;

  constructor(private main: MainService) {
    this.quarterOptions = ['Q1', 'Q2', 'Q3', 'Q4'];
  }

  ngOnInit() {
    this.main.getCars().subscribe(
      (res: CarsResult) => {
        this.carsResult = res;
      }, (err: Error) => {
        console.error(err);
        this.carsResult = null;
      });
  }

}
