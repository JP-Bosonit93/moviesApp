import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAfterInputComponent } from './result-after-input.component';

describe('ResultAfterInputComponent', () => {
  let component: ResultAfterInputComponent;
  let fixture: ComponentFixture<ResultAfterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultAfterInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultAfterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
