import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberFormComponent } from './number-form/number-form.component';
import { ListAndSumDisplayComponent } from './list-and-sum-display/list-and-sum-display.component';
import { StoreModule } from '@ngrx/store';
import { numberListReducer } from './number-list/number-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NumberFormComponent,
    ListAndSumDisplayComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({numList: numberListReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
