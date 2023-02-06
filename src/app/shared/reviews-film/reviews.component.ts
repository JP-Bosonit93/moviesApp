import { Component, Input, OnInit } from '@angular/core';
import { MovieServices } from '../../services/movie-services.service';
import { Reviews } from '../../interfaces/Reviews.interface';

@Component({
  selector: 'app-reviews',
  templateUrl: 'reviews.component.html',
  styleUrls: ['reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews:Reviews[] = []
  @Input() movieid!:number;

  constructor( private movieServices: MovieServices){}

  ngOnInit(): void {
    this.movieServices.getMovieReviews(this.movieid).subscribe(res => this.reviews = res.results);
  }

}
