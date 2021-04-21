import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD_ACTION } from '../number-list/number-list-actions';

@Component({
  selector: 'number-input-form',
  templateUrl: './number-form.component.html',
  styleUrls: ['./number-form.component.css']
})
export class NumberFormComponent implements OnInit {

  curVal: number = 10;

  constructor(private numList: Store<{ numList: number[] }>) { }

  ngOnInit(): void {
  }

  newVal(val: string): void {
    this.curVal = parseInt(val, 10);
  }

  onButtonClicked(): void {
    console.log(this.curVal);
    this.numList.dispatch(ADD_ACTION({num: this.curVal}));
  }
}
