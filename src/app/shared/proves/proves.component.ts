import { Component, Input, OnInit } from '@angular/core';
import { MovieServices } from '../../services/movie-services.service';
import { Reviews } from '../../interfaces/Reviews.interface';

@Component({
  selector: 'app-proves',
  templateUrl: './proves.component.html',
  styleUrls: ['proves.component.css']
})
export class ProvesComponent implements OnInit {

  reviews:Reviews[] = []
  @Input() movieid!:number;

  constructor( private ms: MovieServices){}

  ngOnInit(): void {
    this.ms.getMovieReviews(this.movieid).subscribe(res => this.reviews = res.results);
  }

  click(){
    console.log(this.reviews)
  }
}
