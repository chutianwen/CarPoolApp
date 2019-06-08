import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinProComponent } from './fin-pro.component';

describe('FinProComponent', () => {
  let component: FinProComponent;
  let fixture: ComponentFixture<FinProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
