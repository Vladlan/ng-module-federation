import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLibComponent } from './auth-lib.component';

describe('AuthLibComponent', () => {
  let component: AuthLibComponent;
  let fixture: ComponentFixture<AuthLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthLibComponent]
    });
    fixture = TestBed.createComponent(AuthLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
