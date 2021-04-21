import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer, PartialObserver, Subscription } from 'rxjs';
import { NUMBER_LIST } from '../TEMPDATA';

@Component({
  selector: 'list-and-sum-display',
  templateUrl: './list-and-sum-display.component.html',
  styleUrls: ['./list-and-sum-display.component.css']
})
export class ListAndSumDisplayComponent implements OnInit, OnDestroy {

  numbers: Array<number>;
  numbers$: Observable<number[]>;
  numberSubscription: Subscription;

  constructor(private store: Store<{ numList: number[] }>) { 
    const obs: PartialObserver<number[]> = {
      next: nl => this.numbers = nl,
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };


    this.numbers$ = this.store.select('numList');
    this.numberSubscription = this.numbers$.subscribe(obs);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.numberSubscription.unsubscribe();
  }

  sum(): number {
    if (!this.numbers || this.numbers.length === 0) {
      return 0;
    }
    return this.numbers.reduce((accumulated, current) => accumulated + current);
  }
}
