import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as crypto from 'crypto';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';
import { Result } from '../../interfaces/result.interfaces';
import { Register } from 'src/app/interfaces/formLogin.interface';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
}) //implements OnInit
export class RegisterComponent implements OnInit {
  form: FormGroup;
  showForm: boolean = true;
  isLoading: boolean = false;
  users: Register[] = [];
  newUsers: Result[] = [];
  email!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: FormService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      status: [1],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //Esto puede ser null o [] o traer cosas
    const usersRegistered: null | string = localStorage.getItem('normalUsers');
    console.log(usersRegistered);
    if (usersRegistered != null) {
      this.users = [...JSON.parse(usersRegistered)];
    }
    console.log(this.users);

    this.form.get('email')?.valueChanges.subscribe((value) => {
      this.email = value;
      console.log(value);
    });
  }

  handleEvent() {
    // Capto los valores del formulario
    let formRegisterValues = this.form.value; //Formulario completo

    // Creo el objectWithoutPass2 que es un {} pero sin pass2
    let { password2, ...objectWithoutPass2 } = formRegisterValues; // Quito la contraseña de confirmacion

    this.dataService.sendData(objectWithoutPass2);
    this.router.navigate(['login']);
  }

  isSubmitDisabled() {
    return this.form.invalid || this.sameEmail();
  }

  sameEmail(): boolean {
    let oto = this.users.filter((res) => res.email == this.email);
    console.log(oto);
    if (oto.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  openAnotherForm() {
    this.showForm = !this.showForm;
  }

  clearStorage() {
    localStorage.clear();
  }
}
