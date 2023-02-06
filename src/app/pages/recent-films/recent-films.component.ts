import { Component, OnInit } from '@angular/core';
import { MovieServices } from 'src/app/services/movie-services.service';
import { Result } from '../../interfaces/result.interfaces';
import { RESTCountriesResponse } from '../../interfaces/RestCountriesResponse.interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { CutterRefPipe } from 'src/app/pipes/cutter-ref.pipe';
import { Genre } from '../../interfaces/movieID.interface';
import { genre } from 'src/app/utils/file';
import { ArrayToString } from 'src/app/pipes/arrayToString.pipe';

@Component({
  selector: 'app-result-films',
  templateUrl: './recent-films.component.html',
  styleUrls: ['./recent-films.component.css'],
  providers: [CutterRefPipe, ArrayToString],
})
export class RecentFilms implements OnInit {
  generalResultRest!: RESTCountriesResponse;
  filteredFilms: Result[] = [];
  url!: string;
  localResults: Result[] = JSON.parse(localStorage.getItem('savedMovies')!);
  allGenres: Genre[] = [];
  selectedId: number = 0;
  selectedCities!: Genre;
  options1: Genre[] = [];

  countries!: any;
  selectedCity1: any;

  constructor(
    private ms: MovieServices,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let url: string =
      document.URL.split('/')[document.URL.split('/').length - 1];
    this.url = url;

    if (url == 'top') {
      this.ms
        .getTopRatedMoviesByPage(1)
        .subscribe((generalResults: RESTCountriesResponse) => {
          this.generalResultRest = generalResults;
          this.filteredFilms = this.generalResultRest.results;
        });

      this.ms.getGenres().subscribe((res) => {
        this.allGenres = res;
      });

      this.options1 = genre;
    } else {
      this.ms
        .getMovieByPage(1)
        .subscribe((generalResults: RESTCountriesResponse) => {
          this.generalResultRest = generalResults;
          this.filteredFilms = this.generalResultRest.results;
        });

      this.ms.getGenres().subscribe((res) => {
        this.allGenres = res;
      });

      this.options1 = genre;
    }
  }

  updateSelectedId(event: any) {
    console.log(event.target.value);
    console.log(this.url);
    this.selectedId = Number(event.target.value);
    if (this.url == '') {
      if (this.selectedId == 0) {
        this.ms
          .getMovieByPage(1)
          .subscribe((generalResults: RESTCountriesResponse) => {
            this.generalResultRest = generalResults;
            this.filteredFilms = this.generalResultRest.results;
          });
      } else {
        this.ms
          .getMovieByPage(1)
          .subscribe((generalResults: RESTCountriesResponse) => {
            this.generalResultRest = generalResults;
            let filteredByGenre = this.generalResultRest.results.filter((res) =>
              [...res.genre_ids].includes(this.selectedId)
            );
            this.filteredFilms = filteredByGenre;
          });
      }
    } else {
      if (this.selectedId == 0) {
        this.ms
          .getTopRatedMoviesByPage(1)
          .subscribe((generalResults: RESTCountriesResponse) => {
            this.generalResultRest = generalResults;
            this.filteredFilms = this.generalResultRest.results;
          });
      } else {
        this.ms
          .getTopRatedMoviesByPage(1)
          .subscribe((generalResults: RESTCountriesResponse) => {
            this.generalResultRest = generalResults;
            let filteredByGenre = this.generalResultRest.results.filter((res) =>
              [...res.genre_ids].includes(this.selectedId)
            );
            this.filteredFilms = filteredByGenre;
          });
      }
    }
  }

}
