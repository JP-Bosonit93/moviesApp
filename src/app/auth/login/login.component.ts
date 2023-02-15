import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/interfaces/formLogin.interface';
import { Subject, takeUntil } from 'rxjs';
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

  constructor(private authService:AuthService,private router:Router, private fb: FormBuilder, private dataService: FormService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit():void {

    const usersRegistered: null | string = localStorage.getItem('normalUsers');
    if (usersRegistered != null) {
      this.users = [...JSON.parse(usersRegistered)];
    }

    const usersRegisteredpremium: null | string = localStorage.getItem('premiumUsers');
    if (usersRegisteredpremium != null) {
      this.usersPremium = [...JSON.parse(usersRegisteredpremium)];
    }

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
        alert('no has pasado por el registro');
        // this.router.navigate(['register']);
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
    console.log(this.form.value); // => {email: 'ana@ana.com', password: '1234'}
    const { email, password } = this.form.value;
    if (this.emailRegister2 === email && this.passwordRegister2 === password) {
      console.log('ok');
      if(this.status == 1){
        this.authService.setStatus(1);
      this.users = [...this.users,this.userRegistered]
        localStorage.setItem('normalUsers', JSON.stringify( [...this.users]));
      }if(this.status == 2){
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
