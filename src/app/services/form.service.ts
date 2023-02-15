import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Register } from '../interfaces/formLogin.interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private dataSource = new BehaviorSubject< null | Register>(null);
  data = this.dataSource.asObservable();

  sendData(data: Register) {
    this.dataSource.next(data);
  }

}
