import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAndSumDisplayComponent } from './list-and-sum-display.component';

describe('ListAndSumDisplayComponent', () => {
  let component: ListAndSumDisplayComponent;
  let fixture: ComponentFixture<ListAndSumDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAndSumDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAndSumDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
