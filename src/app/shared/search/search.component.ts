import { Component } from '@angular/core';
import { MovieServices } from 'src/app/services/movie-services.service';
import { BehaviorSubject, debounceTime, switchMap } from 'rxjs';
import { Result } from '../../interfaces/result.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['search.component.css'],
})
export class SearchComponent {
  inputValue:string = '';
  resultsFilteredFilms!: Result[];
  private formValueSubject = new BehaviorSubject<string>('');

  constructor(private ms: MovieServices, private router: Router) {}

  /**
   ** Esta función te permite captar el valor del input,
   ** trae predefinido un string vacio para que no inicialice ninguna busqueda
   ** hace la consulta a https://api.themoviedb.org/3/search/movie?api_key=7be72508776961f3948639fbd796bccd&query=${name}
   ** en la que puede introducir el evento que el valor que capta SwitchMap y pasarselo como arguemento a la función
   * @param value
   */

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
