import { Component } from '@angular/core';
import { IUser } from './models/user';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedUser!:IUser;
  users = [
    {
      name: 'Arun',
      age: 10
    },
    {
      name: 'Shankar',
      age: 20
    },
    {
      name: 'Anu',
      age: 15
    }
  ];

  onUserSelect(user: IUser): void {
    this.selectedUser = user;
  }
}