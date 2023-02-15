import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RecentFilms } from '../pages/recent-films/recent-films.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { MostViewComponent } from './most-view/most-view.component';
import { LikesFilm } from './likes-film/likes-film.component';
import { CutterRefPipe } from '../pipes/cutter-ref.pipe';
import { ResultByIDComponent } from './last-result/resultByID.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultAfterInputComponent } from './result-after-input/result-after-input.component';
import { ArrayToString } from '../pipes/arrayToString.pipe';
import { ShowFilmsComponent } from '../components/show-films/show-films.component';
import { ReviewsComponent } from './reviews-film/reviews.component';
import { RegisterComponent } from '../auth/register/register.component';
import { RegisterPremiumComponent } from '../auth/register-premium/register-premium.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from '../auth/login/login.component';



@NgModule({
  declarations: [
    NavbarComponent,
    RecentFilms,
    AsideMenuComponent,
    MostViewComponent,
    LikesFilm,
    CutterRefPipe,
    ResultByIDComponent,
    SearchComponent,
    ResultAfterInputComponent,
    ReviewsComponent,
    ArrayToString,
    ShowFilmsComponent,
    RegisterComponent,
    RegisterPremiumComponent,
    AdminComponent,
    LoginComponent

  ],
  exports:[
    NavbarComponent,
    RecentFilms,
    AsideMenuComponent,
    ShowFilmsComponent

  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule

  ]
})

export class SharedModule { }
