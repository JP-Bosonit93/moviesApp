import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/interfaces/formLogin.interface';
import { Subject, takeUntil, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service.service';
import { Register } from '../../interfaces/formLogin.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {

  // public get emailRegister2(): string {
    //   return this._emailRegister2;
    // }

  // public set emailRegister2(value: string) {
    //   console.log('setter',value);
    //   this._emailRegister2 = value;
    // }

  form: FormGroup;
  emailRegister2!: string;
  passwordRegister2!: string;
  status!: number;
  nameToJwt!: string;
  users: Register[] = [];
  usersPremium: Register[] = [];
  userRegistered!:Register;
  ngUnsubscribe$ = new Subject<boolean>();
  emailLoginForm!: string;

  constructor(private authService:AuthService,private router:Router, private fb: FormBuilder, private dataService: FormService) {
    //* Inicializamos el formulario
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit():void {

    // Traemos datos de local Storage

    //* Datos desde local Storage 'normalUsers'
    const usersRegistered: null | string = localStorage.getItem('normalUsers');
    if (usersRegistered != null) {
      this.users = [...JSON.parse(usersRegistered)];
    }

    //* Datos desde local Storage 'premiumUsers'
    const usersRegisteredpremium: null | string = localStorage.getItem('premiumUsers');
    if (usersRegisteredpremium != null) {
      this.usersPremium = [...JSON.parse(usersRegisteredpremium)];
    }

    //* Nos subscribimos a lo que nos ha mando el formulario de registro si es que venimos desde allí
    this.dataService.data.pipe(takeUntil(this.ngUnsubscribe$)).subscribe((res) => {
      if (res) {
        const { password, email,name,status } = res;
        this.userRegistered = res;
        this.emailRegister2 = email;
        this.passwordRegister2 = password;
        this.nameToJwt = name;
        this.status = status;
        console.log(email,password,name,status);
      }else{
        return;
      }
    });
  }

  getToken():boolean{

    if(localStorage.getItem('token')){
      return false
    }else{
      return true
    }
  }

  handleEvent() {

    //* Captamos los datos del formulario de login
    const { email, password } = this.form.value;

    if(this.emailRegister2 == undefined && this.passwordRegister2 == undefined){
    //* Si no venimos desde registro y no hay nada pasamos por aquí
    const email = this.form.get('email')?.value;
    let findInNormal = this.users.find(res => res.email == email);
    let findInPRemium = this.usersPremium.find(res => res.email == email);
    console.log(findInNormal,findInPRemium);
    if(findInNormal != undefined){
      this.router.navigate(['']);
      this.authService.setStatus(1);
      this.authService.setToken(findInNormal.name);
      localStorage.setItem('token', findInNormal.name);
      this.authService.login();
    }
    if(findInPRemium != undefined){
      this.router.navigate(['']);
      this.authService.setStatus(2)
      this.authService.setToken(findInPRemium.name)
      localStorage.setItem('token', findInPRemium.name);
      this.authService.login();
    }

    }else{
    //* Si venimos de registro y sabemos que ha captado datos
      if (this.emailRegister2 === email && this.passwordRegister2 === password) {
        if(this.status == 1){
          this.authService.setStatus(1);
        this.users = [...this.users,this.userRegistered]
          localStorage.setItem('normalUsers', JSON.stringify( [...this.users]));
        }
        if(this.status == 2){
          this.authService.setStatus(2)
          this.usersPremium = [...this.usersPremium,this.userRegistered]
          localStorage.setItem('premiumUsers', JSON.stringify( [...this.usersPremium]));
        }

        console.log(this.users);
        this.router.navigate(['']);
         this.authService.setToken(this.nameToJwt)
          localStorage.setItem('token', this.nameToJwt);
          this.authService.login();
        // }
      }else{
        return;
      }
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next(true);
    this.ngUnsubscribe$.complete();
  }

  click(){
    this.dataService.data.subscribe(res => console.log(res));
  }
}
