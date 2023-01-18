import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/result.interfaces';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieServices } from 'src/app/services/movie-services.service';
import { RESTCountriesResponse } from 'src/app/interfaces/RestCountriesResponse.interfaces';

@Component({
  selector: 'app-last-result',
  templateUrl: './last-result.component.html',
  styleUrls: ['last-result.component.css'],
})
export class LastResultComponent implements OnInit {
  savedMovie: Result[] = [];
  results: Result[] = [];

  constructor(
    private route: Router,
    private actRoute: ActivatedRoute,
    private ms: MovieServices
  ) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe((params) => {
      let id = params['id'];
      this.ms.getTopRatedMoviesByPage(1).subscribe((results) => {
        this.savedMovie = results.results;
        this.results = [...this.savedMovie].filter((arg) => arg.id == id);
        if (this.results.length == 0) {
          console.log('OK')
           this.ms.getMovieByPage(1).subscribe((results) => {
        this.savedMovie = results.results;
        this.results = [...this.savedMovie].filter((arg) => arg.id == id);
           })
        }
      });
    });
  }

  goingHome() {
    this.route.navigate(['top']);
  }
}
