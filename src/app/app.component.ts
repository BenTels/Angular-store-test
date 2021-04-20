import { Component } from '@angular/core';
import { NUMBER_LIST } from './TEMPDATA';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store-test';

  numbers: Array<number> = NUMBER_LIST;

  onNumberAdded(event : number) {
    this.numbers.push(event);
  }
}
