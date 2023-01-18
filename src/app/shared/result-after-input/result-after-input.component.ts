import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Result } from '../../interfaces/result.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-after-input',
  templateUrl: './result-after-input.component.html',
  styleUrls: ['result-after-input.component.css']
})
export class ResultAfterInputComponent implements  OnChanges {

  @Input() resultsFilteredFilms!: Result[];

  constructor( private router: Router){}

  ngOnChanges(): void {
    //console.log(this.resultsFilteredFilms)
  }

  navigateToitem(item:Result){
    this.router.navigate(['/last', item.id]);
  }

}
