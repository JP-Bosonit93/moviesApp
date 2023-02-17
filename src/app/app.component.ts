import { Component } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'moviesApp';
  route!: string;
  bool!: boolean;

  constructor( private activatedRoute: ActivatedRoute, private auth:AuthService) {
    this.auth.checkIsLogged().subscribe(res => {console.log(res), this.bool = res})
  }
}
