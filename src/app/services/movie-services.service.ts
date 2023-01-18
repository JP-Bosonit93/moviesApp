import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../interfaces/result.interfaces';
import { RESTCountriesResponse } from '../interfaces/RestCountriesResponse.interfaces';
import { Genre } from '../interfaces/genre.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieServices {


  private API_KEY: string = 'https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd&page=12';

  constructor( private http: HttpClient ) { }

  getMovies(): Observable<RESTCountriesResponse>{
    return this.http.get<RESTCountriesResponse>('https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd&page=1');
  }

  getMovieByPage( page:number ): Observable<RESTCountriesResponse>{
   return this.http.get<RESTCountriesResponse> (`https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd&page=${page}`)
  }

  getTopRatedMoviesByPage( page:number ):Observable<RESTCountriesResponse>{
    return this.http.get<RESTCountriesResponse> (`https://api.themoviedb.org/3/movie/top_rated?api_key=7be72508776961f3948639fbd796bccd&language=en-US&page=${1}`)
  }

  getUpcomingMoviesByPage( page:number ):Observable<RESTCountriesResponse[]>{
    return this.http.get<RESTCountriesResponse[]>(`https://api.themoviedb.org/3/movie/upcoming?api_key=7be72508776961f3948639fbd796bccd&language=en-US&page=${page}`)
  }

  getReviewByMovieID( movie_id:number,page:number ){
    return  this.http.get(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=7be72508776961f3948639fbd796bccd&language=en-US&page=${page}`)
  }

  getLastMovie():Observable<Result>{
    return this.http.get<Result>('https://api.themoviedb.org/3/movie/latest?api_key=7be72508776961f3948639fbd796bccd&language=en-US')
  }

  getGenres():Observable<Genre[]>{
    return this.http.get<Genre[]>('https://api.themoviedb.org/3/genre/movie/list?api_key=7be72508776961f3948639fbd796bccd&language=en-US')
  }

  getMovieFiltered( name:string ): Observable<RESTCountriesResponse>{
    return this.http.get<RESTCountriesResponse>(`https://api.themoviedb.org/3/search/movie?api_key=7be72508776961f3948639fbd796bccd&query=${name}`);
  }

}
