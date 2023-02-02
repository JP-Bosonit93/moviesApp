import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Login',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'Register',
        icon: 'pi pi-fw pi-send',
      },
    ];
  }

  seeHeight(){
    var navbar:any | null = document.querySelector('.navbarTemplate');
    var height = navbar.offsetHeight;
  console.log(height);
  }

}
