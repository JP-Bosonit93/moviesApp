import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ScrollPanelModule} from 'primeng/scrollpanel';



@NgModule({
  declarations: [],
  exports: [
    FieldsetModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    DataViewModule,
    PanelMenuModule,
    ScrollPanelModule,


  ]
})
export class PrimeNgModule { }
