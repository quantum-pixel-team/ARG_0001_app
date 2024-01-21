import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../interfaces/user.interfaces";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent  {

  @Input() users: User[] = [];
  @Output() deletedUser = new EventEmitter<User>()
  @Output() updatedUser = new EventEmitter<User>()
  @Output() newUser = new EventEmitter<User>()
  @Input() createdUsers: User[] = [];



  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'delete'];
  public addNewUser() {
    let user = {
      id: undefined,
      firstName: '',
      lastName: '',
      email: undefined
    };
    this.newUser.emit(user);
  }

  deleteUser(user: User) {
    this.deletedUser.emit(user);
  }

  updateUsersList(updatedUser: User) {
    if(updatedUser.id)
    this.updatedUser.emit(updatedUser)
  }

}
