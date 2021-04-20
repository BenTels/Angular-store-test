import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberFormComponent } from './number-form/number-form.component';
import { ListAndSumDisplayComponent } from './list-and-sum-display/list-and-sum-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberFormComponent,
    ListAndSumDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
