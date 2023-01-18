import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RESTCountriesResponse } from 'src/app/interfaces/RestCountriesResponse.interfaces';
import { Result } from 'src/app/interfaces/result.interfaces';
import { MovieServices } from '../../services/movie-services.service';

@Component({
  selector: 'app-most-view',
  templateUrl: './most-view.component.html',
  styleUrls: ['most-view.component.css'],
})
export class MostViewComponent implements OnInit {
  generalResultRest!: RESTCountriesResponse;
  filteredFilms: Result[] = [];
  localResults: Result[] = JSON.parse(localStorage.getItem('savedMovies')!);

  constructor(
    private ms: MovieServices,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ms.getTopRatedMoviesByPage(1).subscribe((generalResults:RESTCountriesResponse) => {
      this.generalResultRest = generalResults;
      this.filteredFilms = this.generalResultRest.results;
    });
  }

  saveToLocal(item: any) {

    let savedMovies: any | Result[] = JSON.parse(
      localStorage.getItem('savedMovies')!
    );
    let newSavedMovies: Result[] = [];
    console.log(savedMovies);

    if (savedMovies === null) {
      alert('acabas de introducir la primera pelicula');
      newSavedMovies.unshift(item);
      localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
    }

    if (savedMovies !== null) {
      if ([...savedMovies].some((movie:Result) => movie.id === item.id)) {
        alert('pelicula ya introducida');
        savedMovies = [...savedMovies];
      } else {
        setTimeout(() => {
          newSavedMovies = [...savedMovies];
        if (newSavedMovies.some((movie) => movie.id !== item.id)) {
          newSavedMovies.unshift(item);
          localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
          this.localResults = [...newSavedMovies]
        }
        }, 1000);

      }
    }
  }

  checkSimilar(x: Result): boolean {
    if ([...this.localResults].some((arg:Result) => arg.id === x.id)) {
      return true;
    }
    return false;
  }

  navigateToitem(item:Result){
    this.router.navigate(['/last', item.id]);
  }
}
