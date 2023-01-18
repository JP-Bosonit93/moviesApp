import { Component, OnInit } from '@angular/core';
import { MovieServices } from 'src/app/services/movie-services.service';
import { Result } from '../../interfaces/result.interfaces';
import { RESTCountriesResponse } from '../../interfaces/RestCountriesResponse.interfaces';
import { CardModule } from 'primeng/card';
import { ActivatedRoute, Router } from '@angular/router';
import { CutterRefPipe } from 'src/app/pipes/cutter-ref.pipe';

@Component({
  selector: 'app-result-films',
  templateUrl: './result-films.component.html',
  styleUrls: ['./result-films.component.css'],
  providers: [CutterRefPipe],
})
export class ResultFilmsComponent implements OnInit {
  generalResultsRest!: RESTCountriesResponse;
  filteredFilms: Result[] = [];
  localResults: Result[] = JSON.parse(localStorage.getItem('savedMovies')!);

  constructor(private ms: MovieServices, private router: Router) {}

  ngOnInit(): void {
    this.ms
      .getMovieByPage(1)
      .subscribe((generalResults: RESTCountriesResponse) => {
        this.generalResultsRest = generalResults;
        this.filteredFilms = this.generalResultsRest.results;
      });
  }

  onSave(item: Result) {
    this.router.navigate(['/about'], { state: { item } });
  }

  saveToLocal(item: any) {
    const savedMovies: Result[] = JSON.parse(
      localStorage.getItem('savedMovies')!
    );
    let newSavedMovies: Result[] = [...savedMovies];

    if (newSavedMovies.some((movie: Result) => movie.id == item.id)) {
      alert('Ya has introdudcido la pelicula');
    }
    if (!savedMovies) {
      alert('no hay pelis disponibles');
      newSavedMovies = [];
      newSavedMovies.unshift(item);
      localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
    } else {
      setTimeout(() => {
        newSavedMovies = [...savedMovies];
        newSavedMovies.push(item);
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
        this.localResults = [...newSavedMovies];
      }, 1000);
    }
  }

  checkSimilar(x: Result): boolean {
    if ([...this.localResults].some((arg: Result) => arg.id === x.id)) {
      return true;
    }
    return false;
  }

  navigateToitem(item: Result) {
    this.router.navigate(['/last', item.id]);
  }
}
