import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { MovieServices } from 'src/app/services/movie-services.service';
import { QueryError } from '../../interfaces/queryError.interface';
import { RESTCountriesResponse } from 'src/app/interfaces/RestCountriesResponse.interfaces';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Result } from '../../interfaces/result.interfaces';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['search.component.css'],
})
export class SearchComponent implements OnInit {

  resultsFilteredFilms!: Result[];
  filteredGroupFilms!: RESTCountriesResponse;
  miFormulario: FormGroup;
  valorFomularioString!: Observable<string>;

  constructor(
    private ms: MovieServices,
    private fb: FormBuilder,
  ) {
    this.miFormulario = this.fb.group({
      nombre: [''],
    });
  }

  ngOnInit(): void {
    this.miFormulario?.get('nombre')?.valueChanges.subscribe((valorString) => {
      this.valorFomularioString = valorString;
    });

  }

  guardar(){
    this.ms.getMovieFiltered(this.valorFomularioString.toString()).subscribe(groups => {
      this.filteredGroupFilms = groups
      this.resultsFilteredFilms = this.filteredGroupFilms.results
    })
  }


}
