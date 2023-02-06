import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  RecentFilms } from './pages/recent-films/recent-films.component';
import {  ResultByIDComponent } from './shared/last-result/resultByID.component';
import { SearchComponent } from './shared/search/search.component';
import { ReviewsComponent } from './shared/reviews-film/reviews.component';
import { LikesFilm } from './shared/likes-film/likes-film.component';


const routes: Routes = [
  {path: '', component: RecentFilms},
  {path: 'likes', component: LikesFilm},
  { path: 'top', component: RecentFilms },
  { path: 'last/:id', component: ResultByIDComponent },
  { path: 'search', component: SearchComponent},
  { path: 'review', component: ReviewsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

