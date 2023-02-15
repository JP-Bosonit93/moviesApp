import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPremiumComponent } from './register-premium.component';

describe('RegisterPremiumComponent', () => {
  let component: RegisterPremiumComponent;
  let fixture: ComponentFixture<RegisterPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPremiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
