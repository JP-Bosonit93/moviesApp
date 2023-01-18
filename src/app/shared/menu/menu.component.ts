import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {MenuModule} from 'primeng/menu';

import {MegaMenuItem} from 'primeng/api';  //required when using MegaMenu
import { Result } from '../../interfaces/result.interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  result3: Result[] = [];


  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar'
      }
  ];
  }

}
