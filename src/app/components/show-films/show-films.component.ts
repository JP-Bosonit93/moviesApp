import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/result.interfaces';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-show-films',
  templateUrl: './show-films.component.html',
  styleUrls: ['./show-films.component.sass']
})
export class ShowFilmsComponent {
  localResults: Result[] = JSON.parse(localStorage.getItem('savedMovies')!);

  @Input()filteredFilms:any;
  constructor(private router:Router){}

  checkSimilar(x: Result): boolean {
    if ([...this.localResults].some((arg: Result) => arg.id === x.id)) {
      return true;
    }
    return false;
  }

  navigateToitem(item: Result) {
    this.router.navigate(['/last', item.id]);
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
      if ([...savedMovies].some((movie: Result) => movie.id === item.id)) {
        alert('pelicula ya introducida');
        savedMovies = [...savedMovies];
      } else {
        setTimeout(() => {
          newSavedMovies = [...savedMovies];
          if (newSavedMovies.some((movie) => movie.id !== item.id)) {
            newSavedMovies.unshift(item);
            localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
            this.localResults = [...newSavedMovies];
          }
        }, 1000);
      }
    }
  }
}
