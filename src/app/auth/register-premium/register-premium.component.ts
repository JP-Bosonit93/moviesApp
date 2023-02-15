import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../../interfaces/formLogin.interface';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-register-premium',
  templateUrl: './register-premium.component.html',
  styleUrls: ['register-premium.component.scss']
})
export class RegisterPremiumComponent implements OnInit {
  form: FormGroup;
  value: string = '';
  showForm = true;
  passwordVisible: boolean = false;
  users: Register[] = [];


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService:FormService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      status:[2],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      creditCard: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const usersString = localStorage.getItem('premiumUsers');
    if (usersString) {
      this.users = JSON.parse(usersString);
    }
    console.log(this.users)
  }

  handleEvent() {

    // Capto los valores del formulario
    let formRegisterValues = this.form.value; //Formulario completo

    //Le ponemos concatenacion premium
    formRegisterValues.name = formRegisterValues.name + "premium";
    // Creo el objectWithoutPass2 que es un {} pero sin pass2
    let { password2, ...objectWithoutPass2 } = formRegisterValues; // Quito la contraseña de confirmacion

    //this.newUsers = [objectWithoutPass2, ...this.users];
   // console.log(this.newUsers);
    // localStorage.setItem('normalUsers', JSON.stringify(this.newUsers));
    console.log(objectWithoutPass2)
    this.dataService.sendData(objectWithoutPass2);

    this.form.reset();
    this.router.navigate(['login']);
  }

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
    const input = document.getElementById('inputPass') as HTMLInputElement;
    input.type = this.passwordVisible ? 'text' : 'password';
  }

  openAnotherForm() {
    this.showForm
  }
}
