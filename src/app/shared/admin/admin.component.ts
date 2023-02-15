import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  premiumUsers: any[] = [{name: 'Juan', email: 'jpga314@gmail.com', status:1},{name: 'Luis', email: 'luisArr@gmail.com', status:1},{name: 'Emilio', email: 'emi456@gmail.com', status:1}]
  normalUsers: any[] =  [{name: 'Eva', email: 'evaHal456@gmail.com', status:0},{name: 'Toni', email: 'toniTex@gmail.com', status:0},{name: 'Rafa', email: 'rafi123@gmail.com', status:0}]

  constructor (){}

  ngOnInit(): void {

    localStorage.setItem('premiumUsers', JSON.stringify(this.premiumUsers));
    localStorage.setItem('normalUSers', JSON.stringify(this.normalUsers));
  }
}
