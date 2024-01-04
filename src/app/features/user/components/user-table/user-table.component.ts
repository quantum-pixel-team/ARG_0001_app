import {Component, Input, OnInit} from '@angular/core';
import {UserHttpService} from "../../services/user-http.service";
import {User} from "../../interfaces/user.interfaces";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  @Input() users: User[] = [];

  constructor(private service: UserHttpService) {
  }

  ngOnInit() {
    this.fetchUsers();
  }

  public addNewUser() {
    this.users.push({
      id: undefined,
      firstName: '',
      lastName: '',
      email: undefined
    });
  }

  deleteUser(user: User) {
    this.users = this.users.filter(el=> el.id !== user.id);
  }


  private fetchUsers() {
    this.service.fetchUsers().subscribe({
      next: value => this.users = value,
      error: err => console.error(err)
    });
  }
}
