import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/result.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-film',
  templateUrl: './likes-film.component.html',
  styleUrls: ['likes-film.component.scss']
})
export class LikesFilm implements OnInit {

  savedMovies: Result[] = []

  constructor( ){}

  ngOnInit(): void {
    this.savedMovies = JSON.parse(localStorage.getItem("savedMovies")!)
  }

  /**
   ** Primero se trae las pelis que hemos guardado desde Local Storage
   ** Luego creamos el evento para borrar y le pasamos el alert
   ** Primero nos aseguramos que no este vacia la lista
   ** Luego si alguna coincide con la de la lista y nos da true
   ** Encuentro la posición de esa pelicula por ejemplo 1
   ** Si tengo [0,1,2]
   * @param item
   */

  deleteFilm(item:Result){
    let savedMovies: null | Result[] = JSON.parse(localStorage.getItem('savedMovies')!);
    alert('Are you sare to delete this film?')

    if(savedMovies !== null){
      if ([...savedMovies].some((movie:Result) => movie.id === item.id)){
        let positionMovie = [...savedMovies].findIndex((movie) => movie.id === item.id);
        console.log(positionMovie)
        this.savedMovies =  this.savedMovies.slice(0,positionMovie).concat(this.savedMovies.slice(positionMovie+1))
        localStorage.setItem('savedMovies', JSON.stringify(this.savedMovies));
      }
    }

  }
}
