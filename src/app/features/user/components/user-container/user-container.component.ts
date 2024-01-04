import {Component, OnInit, ViewChild} from '@angular/core';
import {UserHttpService} from "../../services/user-http.service";
import {User} from "../../interfaces/user.interfaces";
import {UserTableComponent} from "../user-table/user-table.component";

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  users: User[] = []
  public error: string | undefined
  @ViewChild(UserTableComponent) userTable!: UserTableComponent;

  constructor(private service: UserHttpService) {
  }

  public discard() {
    this.fetchUsers();
  }

  public save() {
    this.service.saveUsers(this.userTable.users).subscribe({
      next: value => {
        console.log("succeed: " + value);
        this.fetchUsers();
      },
      error: err => console.error(err)
    });

  }

  ngOnInit() {
    this.fetchUsers()
  }

  private fetchUsers() {
    this.service.fetchUsers()
      .subscribe({
          next: value => this.users = value,
          error: err => this.error = err.message
        }
      )
  }
}
