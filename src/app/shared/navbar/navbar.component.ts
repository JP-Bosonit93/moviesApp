import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  token!: null | Observable<string>;
  state!: boolean;
  isRegisterEnabled: boolean = true;

  constructor(private router:Router, private authService:AuthService){
    this.token = this.authService.getToken()
  }

  ngOnInit() {

    this.authService.checkIsLogged().subscribe(res => {
      this.state = res;
      console.log(res);
      this.isRegisterEnabled = !res;
    })
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
    // console.log(argo);

  }


  navigateToItems(item:any){
   if(item == 'Login'){
    this.router.navigate(['login']);
   }else{
    this.router.navigate(['register']);
   }
  }

  removeToken(){
    localStorage.removeItem('token');
    this.authService.logout();
  }

  showAlert(item:boolean){
    if(!item){
      alert('primero tienes que desloguearte')
    }
  }

}
