import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFilmsComponent } from './result-films.component';

describe('ResultFilmsComponent', () => {
  let component: ResultFilmsComponent;
  let fixture: ComponentFixture<ResultFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultFilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
