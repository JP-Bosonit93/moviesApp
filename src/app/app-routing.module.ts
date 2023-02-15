import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  RecentFilms } from './pages/recent-films/recent-films.component';
import {  ResultByIDComponent } from './shared/last-result/resultByID.component';
import { SearchComponent } from './shared/search/search.component';
import { ReviewsComponent } from './shared/reviews-film/reviews.component';
import { LikesFilm } from './shared/likes-film/likes-film.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './shared/admin/admin.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';


const routes: Routes = [
  {path: '', component: RecentFilms},
  {path: 'likes', component: LikesFilm},
  { path: 'top', component: RecentFilms,canActivate: [AuthGuardGuard] },
  { path: 'last/:id', component: ResultByIDComponent },
  { path: 'search', component: SearchComponent,canActivate: [AuthGuardGuard] },
  { path: 'review', component: ReviewsComponent},
  { path: 'login', component: LoginComponent, },
  { path: 'register', component: RegisterComponent},
  { path: 'admin', component: AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

