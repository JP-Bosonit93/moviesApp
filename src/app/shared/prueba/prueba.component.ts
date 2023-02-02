import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, debounceTime, switchMap } from 'rxjs';
import { RESTCountriesResponse } from 'src/app/interfaces/RestCountriesResponse.interfaces';
import { Result } from 'src/app/interfaces/result.interfaces';
import { MovieServices } from 'src/app/services/movie-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.sass'],
})


export class PruebaComponent {
  inputValue = '';
  resultsFilteredFilms!: Result[];
  private formValueSubject = new BehaviorSubject<string>(this.inputValue);

  constructor(private ms: MovieServices, private router: Router) {
  }

  updateFormValue(value: string) {

    if (value.length > 0) {
      this.formValueSubject.next(value);
    } else {
      this.formValueSubject.next('%27');
    }

    this.formValueSubject
      .pipe(
        debounceTime(500),
        switchMap((value) => this.ms.getMovieFiltered(value))
      )
      .subscribe((generalResult) => {
        this.resultsFilteredFilms = generalResult.results;
      });
  }

  navigateToitem(item: Result) {
    this.router.navigate(['/last', item.id]);
  }
}
