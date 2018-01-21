import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressManageComponent } from './user-address-manage.component';

describe('UserAddressManageComponent', () => {
  let component: UserAddressManageComponent;
  let fixture: ComponentFixture<UserAddressManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddressManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddressManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
