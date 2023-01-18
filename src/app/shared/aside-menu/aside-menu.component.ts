import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['aside-menu.component.css'],
})
export class AsideMenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-pw pi-home',
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
      },
      {
        label: 'Likes',
        icon: 'pi pi-fw pi-thumbs-up',
      },
      {
        label: 'Top rated films',
        icon: 'pi pi-fw pi-star',
      },
    ];
  }

  onLabelClick(items: any) {
    const argo = [...items];
    let ot = argo.filter((arg) => arg.expanded);

    if(ot){
      if (ot[0].label === 'Home') {
        this.router.navigate(['/']);
        delete ot[0].expanded;
      }
      if(ot){
        if (ot[0].label === 'Search') {
          this.router.navigate(['/search']);
          delete ot[0].expanded;
        }
        if(ot){
          if (ot[0].label === 'Likes') {
            this.router.navigate(['/likes']);
            delete ot[0].expanded;
          }
        }
        if(ot){
          if (ot[0].label === 'Top rated films') {
            this.router.navigate(['/top']);
            delete ot[0].expanded;
          }
        }
      }
    }
  }
}
