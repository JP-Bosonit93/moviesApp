import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RESTCountriesResponse } from 'src/app/interfaces/RestCountriesResponse.interfaces';
import { Result } from 'src/app/interfaces/result.interfaces';
import { MovieServices } from '../../services/movie-services.service';
import { Genre } from '../../interfaces/movieID.interface';
import { genre } from 'src/app/utils/file';

@Component({
  selector: 'app-most-view',
  templateUrl: './most-view.component.html',
  styleUrls: ['most-view.component.css'],
})
export class MostViewComponent implements OnInit {
  generalResultRest!: RESTCountriesResponse;
  filteredFilms: Result[] = [];
  localResults: Result[] = JSON.parse(localStorage.getItem('savedMovies')!);
  allGenres: Genre[] = [];
  selectedId: number = 0;
  selectedCities!: Genre;
  options1: Genre[] = [];

  countries!: any;
  selectedCity1: any;

  constructor(
    private movieService: MovieServices,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //     let url = document.URL;
    // let parts = url.split('/');
    // console.log(parts)
    // let top = parts[parts.length - 1];
    // console.log(top)

    let url: string =
      document.URL.split('/')[document.URL.split('/').length - 1];

    if (url == 'top') {
      this.movieService
        .getTopRatedMoviesByPage(1)
        .subscribe((generalResults: RESTCountriesResponse) => {
          this.generalResultRest = generalResults;
          this.filteredFilms = this.generalResultRest.results;
        });

      this.movieService.getGenres().subscribe((res) => {
        this.allGenres = res;
      });

      this.options1 = genre;
    } else {
      this.movieService
      .getMovieByPage(1)
      .subscribe((generalResults: RESTCountriesResponse) => {
        this.generalResultRest = generalResults;
        this.filteredFilms = this.generalResultRest.results;
      });

    this.movieService.getGenres().subscribe((res) => {
      this.allGenres = res;
    });

    this.options1 = genre;
    }
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



  updateSelectedId(event: any) {
    this.selectedId = Number(event.target.value);
    if (this.selectedId == 0) {
      this.movieService
        .getMovieByPage(1)
        .subscribe((generalResults: RESTCountriesResponse) => {
          this.generalResultRest = generalResults;
          this.filteredFilms = this.generalResultRest.results;
        });
    } else {
      this.movieService
        .getMovieByPage(1)
        .subscribe((generalResults: RESTCountriesResponse) => {
          this.generalResultRest = generalResults;
          let filteredByGenre = this.generalResultRest.results.filter((res) =>
            [...res.genre_ids].includes(this.selectedId)
          );
          this.filteredFilms = filteredByGenre;
          console.log(this.filteredFilms);
        });
    }
  }
}
