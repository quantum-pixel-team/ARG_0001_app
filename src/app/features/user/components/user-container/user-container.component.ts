import {Component, OnInit} from '@angular/core';
import {UserHttpService} from "../../services/user-http.service";
import {User} from "../../interfaces/user.interfaces";

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {

  users: User[] = []
  deletedUsers: User[] = []
  updatedUsers: User[] = []
  createdUsers: User[] = []
  public error: string | undefined


  constructor(private service: UserHttpService) {
  }

  public discard() {
    this.fetchUsers();
    this.deletedUsers = []
  }

  public save() {
    this.saveDeletedUsers()
    this.saveUpdatedUsers()
    this.saveCreatedUsers()

  }

  ngOnInit() {
    this.fetchUsers()
  }

  private fetchUsers() {
    this.service.fetchUsers()
      .subscribe({
          next: value => {
            this.users = value
            this.createdUsers = []
            this.deletedUsers = []
            this.updatedUsers = []
          },
          error: err => this.error = err.message
        }
      )
  }

  addDeletedUser(deletedUser: User) {
    this.users = this.users.filter(el => el.id !== deletedUser.id);
    this.deletedUsers.push(deletedUser);
  }

  updatedUser(updatedUser: User) {
    this.updatedUsers = this.updatedUsers.filter(u => u.id !== updatedUser.id);

    this.updatedUsers.push(updatedUser);
  }

  addNewUser(createdUser: User) {
    this.createdUsers.push(createdUser)
  }

  private saveUpdatedUsers() {
    if (this.updatedUsers.length === 0) return;
    console.log(this.updatedUsers)
    this.service.updateUsers(this.updatedUsers).subscribe({
      next: value => {
        console.log("succeed: " + value);
        this.fetchUsers();
      },
      error: err => this.error = err.message
    });
  }

  private saveCreatedUsers() {
    if (this.createdUsers.length === 0) return
    console.log(this.createdUsers)
    this.service.createUsers(this.createdUsers).subscribe({
      next: value => {
        console.log("succeed: " + value);
        this.fetchUsers();
      },
      error: err => this.error = err.message
    });
  }

  private saveDeletedUsers() {
    if (this.deletedUsers.length === 0) return
    this.service.deleteUsers(this.deletedUsers).subscribe({
      next: value => {
        console.log("succeed: " + value);
        this.fetchUsers();
      },
      error: err => this.error = err.message
    });
  }
}
