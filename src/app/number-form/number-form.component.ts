import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'number-input-form',
  templateUrl: './number-form.component.html',
  styleUrls: ['./number-form.component.css']
})
export class NumberFormComponent implements OnInit {

  curVal : number = 10;

  @Output('numberTap') numberEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  newVal(val: string): void {
    this.curVal = parseInt(val);
  }

  onButtonClicked(): void {
    console.log(this.curVal);
    this.numberEmitter.emit(this.curVal);
  }
}
