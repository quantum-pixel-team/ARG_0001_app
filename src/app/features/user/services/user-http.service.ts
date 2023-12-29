import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user.interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private http: HttpClient) {
  }

  public fetchUsers(): Observable<User[]> {
    return this.http.get<any>('http://localhost:8080/users');
  }

  public saveUsers(users: User[]) {
    return this.http.put<any>('http://localhost:8080/users', users);
  }

  deleteUser(user: User) {
    return  this.http.delete('http://localhost:8080/users/' + user.id);
  }

  saveUser(user: User) {
    return this.http.put<any>('http://localhost:8080/user', user);
  }
}
