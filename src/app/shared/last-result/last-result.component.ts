import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Result } from 'src/app/interfaces/result.interfaces';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieServices } from 'src/app/services/movie-services.service';
import { RESTCountriesResponse } from 'src/app/interfaces/RestCountriesResponse.interfaces';
import { ProductService } from '../../services/product-services.service';
import { Product } from 'src/app/interfaces/product.interface';
import { DialogModule } from 'primeng/dialog';
import { movieID } from '../../interfaces/movieID.interface';
@Component({
  selector: 'app-last-result',
  templateUrl: './last-result.component.html',
  styleUrls: ['last-result.component.css'],
})
export class LastResultComponent implements OnInit, OnChanges {
  savedMovie: Result[] = [];
  result!: Result[];
  products: Product[] = [];
  movie!: movieID;
  cols!: any[];
  display: boolean = false;
  id!:number;
  resultsReviews:number = 0;
  state: boolean = true;
  constructor(
    private route: Router,
    private actRoute: ActivatedRoute,
    private ms: MovieServices
  ) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe((params) => {
      let id = params['id'];
      this.id = id;
      this.ms.getMovieReviews(this.id).subscribe(res => this.resultsReviews = res.results.length )
      this.ms.getMovieByID(this.id).subscribe(res => {
        this.result = [res].flat();
      });
    });

  }

  ngOnChanges(changes: SimpleChanges): void {

  }


  goingHome() {
    this.route.navigate(['top']);
  }

  showDialog() {
    this.display = true;
  }

  changeState(){
    this.state = !this.state
  }

}
