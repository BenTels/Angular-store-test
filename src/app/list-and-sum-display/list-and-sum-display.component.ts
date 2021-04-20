import { Component, Input, OnInit } from '@angular/core';
import { NUMBER_LIST } from '../TEMPDATA'

@Component({
  selector: 'list-and-sum-display',
  templateUrl: './list-and-sum-display.component.html',
  styleUrls: ['./list-and-sum-display.component.css']
})
export class ListAndSumDisplayComponent implements OnInit {

  @Input() numbers: Array<number>;

  constructor() { }

  ngOnInit(): void {
  }

  sum(): number {
    if (!this.numbers || this.numbers.length === 0) {
      return 0;
    }
    return this.numbers.reduce((accumulated, current) => accumulated + current);
  }
}
