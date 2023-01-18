import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFilmComponent } from './detail-film.component';

describe('DetailFilmComponent', () => {
  let component: DetailFilmComponent;
  let fixture: ComponentFixture<DetailFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
