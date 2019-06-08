import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTessComponent } from './summary-tess.component';

describe('SummaryTessComponent', () => {
  let component: SummaryTessComponent;
  let fixture: ComponentFixture<SummaryTessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryTessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
