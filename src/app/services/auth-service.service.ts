import { Injectable } from '@angular/core';
// import * as jwt from 'jsonwebtoken';
import { BehaviorSubject, Observable } from 'rxjs';
import { Register } from '../interfaces/formLogin.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  private token = new BehaviorSubject<string>('');
  private statusCode = new BehaviorSubject<number>(0);
  private status!: number;

  constructor() {
    // Traeme el token si existe (null o el string)
    const storedToken: string | null = localStorage.getItem('token');

    let jsonFromLocalNormal:string | null = localStorage.getItem('normalUsers');
    let jsonFromLocalPremium:string | null = localStorage.getItem('premiumUsers');
    let otroJSON!:Register;
    let otroJSONpremium!:Register;

    // Si no es null, se que hay token y estoy logueado
    console.log(storedToken);
    if (storedToken !== null && storedToken.length > 0 ) {
      this.isLoggedIn.next(true);
      this.token.next(storedToken);
      console.log(jsonFromLocalNormal);
      console.log(jsonFromLocalPremium);


      if(jsonFromLocalNormal != undefined || jsonFromLocalNormal != null){
        otroJSON = [...JSON.parse(localStorage.getItem('normalUsers')!)].find(res => res.name == storedToken);
         console.log(otroJSON);
        if(otroJSON !== undefined ){
          console.log('entre en normal');
          this.status = otroJSON.status
          this.statusCode.next(1)
         }
      }

      if(jsonFromLocalPremium != undefined || jsonFromLocalPremium != null){
        otroJSONpremium = [...JSON.parse(localStorage.getItem('premiumUsers')!)].find(res => res.name == storedToken);
        console.log(otroJSONpremium);
        if(otroJSONpremium !== undefined){
          console.log('entre en premium');
          this.status = otroJSONpremium.status
          this.statusCode.next(2)
        }
     }

    }



    console.log(otroJSON,otroJSONpremium, this.status);
    console.log(this.status);
    this.checkIsLoggedStatus();
  }

  login(): void {
    // Lógica de autenticación aquí, por ejemplo, llamada a una API para obtener un token
    this.isLoggedIn.next(true);
  }

  logout(): void {
    // Lógica de cierre de sesión aquí, por ejemplo, borrado del token
    this.isLoggedIn.next(false);
    this.statusCode.next(0);
    this.token.next('');
  }

  setToken(token:string):void{
    this.token.next(token)
  }

  seePremiumUser(): string {
    return this.status.toString();
  }

  checkIsLoggedStatus(): boolean {
    let option!: boolean;
    this.isLoggedIn.subscribe((res) => option = res);
    return option;
  }

  checkIsLogged(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  setStatus(item:number){
    this.statusCode.next(item);
  }

  getToken(): Observable<string> {
    return this.token.asObservable();
  }

  getStatus(): Observable<number>{
    return this.statusCode.asObservable();
  }
}
