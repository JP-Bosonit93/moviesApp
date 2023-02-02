import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './shared/about-component/about-component.component';
import { ResultFilmsComponent } from './pages/result-films/result-films.component';
import { MostViewComponent } from './shared/most-view/most-view.component';
import { DetailFilmComponent } from './shared/detail-film/detail-film.component';
import { LastResultComponent } from './shared/last-result/last-result.component';
import { SearchComponent } from './shared/search/search.component';
import { ProvesComponent } from './shared/proves/proves.component';
import { PruebaComponent } from './shared/prueba/prueba.component';


const routes: Routes = [
  {path: '', component:ResultFilmsComponent},
  { path: 'about', component: AboutComponent },
  {path: 'likes', component:DetailFilmComponent},
  { path: 'top', component: ResultFilmsComponent },
  { path: 'last/:id', component: LastResultComponent },
  { path: 'search', component: SearchComponent},
  { path: 'proves', component: ProvesComponent},
  { path: 'prueba', component: PruebaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

