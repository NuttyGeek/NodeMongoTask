import { Component, OnInit, Input } from '@angular/core';
import { CarsResult } from '../car';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input()
  result: CarsResult = null;

  @Input()
  selectedQuarter: string = 'Q1';

  @Input()
  quarterOptions: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
