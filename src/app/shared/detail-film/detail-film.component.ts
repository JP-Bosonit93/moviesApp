import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/result.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {

  savedMovies: Result[] = []

  constructor( ){}

  ngOnInit(): void {
    this.savedMovies = JSON.parse(localStorage.getItem("savedMovies")!)
  }

  deleteFilm(item:Result){

    let savedMovies: null | Result[] = JSON.parse(localStorage.getItem('savedMovies')!);
    alert('Are you sare to delete this film?')
    if(savedMovies !== null){
      if ([...savedMovies].some((movie:Result) => movie.id === item.id)){
        let positionMovie = [...savedMovies].findIndex((movie) => movie.id === item.id);
        this.savedMovies =  this.savedMovies.slice(0,positionMovie).concat(this.savedMovies.slice(positionMovie+1))
        localStorage.setItem('savedMovies', JSON.stringify(this.savedMovies));
      }
    }

  }
}
