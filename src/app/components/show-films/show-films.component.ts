import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/result.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-films',
  templateUrl: './show-films.component.html',
  styleUrls: ['./show-films.component.scss'],
})
export class ShowFilmsComponent implements OnInit {
  localResults: Result[] | null | [] = JSON.parse(
    localStorage.getItem('savedMovies')!
  );

  @Input() filteredFilms: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    // console.log(this.localResults);
  }

  checkSimilar(x: Result): boolean {
    if (this.localResults !== null && this.localResults.length > 0) {
      if ([...this.localResults].some((arg: Result) => arg.id === x.id)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  navigateToitem(item: Result) {
    this.router.navigate(['/last', item.id]);
  }

  saveToLocal(item: any) {
    let savedMovies = JSON.parse(
      localStorage.getItem('savedMovies')!
    );
    let newSavedMovies: Result[] = [];

    console.log(savedMovies)

    if (savedMovies == null || savedMovies.length == 0) {
      alert('acabas de introducir la primera pelicula');
      setTimeout(() => {
        newSavedMovies.unshift(item);
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
        this.localResults = [...newSavedMovies];
      }, 1000);
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
