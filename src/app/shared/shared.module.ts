import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultFilmsComponent } from '../pages/result-films/result-films.component';
import { AboutComponent } from './about-component/about-component.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { MostViewComponent } from './most-view/most-view.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { CutterRefPipe } from '../pipes/cutter-ref.pipe';
import { LastResultComponent } from './last-result/last-result.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultAfterInputComponent } from './result-after-input/result-after-input.component';
import { ProvesComponent } from './proves/proves.component';
import { PruebaComponent } from './prueba/prueba.component';
import { ArrayToString } from '../pipes/arrayToString.pipe';
import { ShowFilmsComponent } from '../components/show-films/show-films.component';


@NgModule({
  declarations: [
    MenuComponent,
    NavbarComponent,
    ResultFilmsComponent,
    AboutComponent,
    AsideMenuComponent,
    MostViewComponent,
    DetailFilmComponent,
    CutterRefPipe,
    LastResultComponent,
    SearchComponent,
    ResultAfterInputComponent,
    ProvesComponent,
    PruebaComponent,
    ArrayToString,
    ShowFilmsComponent

  ],
  exports:[
    MenuComponent,
    NavbarComponent,
    ResultFilmsComponent,
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
