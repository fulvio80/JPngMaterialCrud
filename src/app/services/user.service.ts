import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUsersAPI = 'https://jsonplaceholder.typicode.com/users/'

  constructor(
    private http: HttpClient
  ) { }

  //metodo di lettura API JP
  getAllUsers() {
    return this.http.get(this.urlUsersAPI);
  }
  
  //metodo di cancellazione dato tramite id, passa osservable al component.ts
  deleteUser(userId: number) {
    return this.http.delete(this.urlUsersAPI+userId);
  }

  //metodo di lettura per il singolo user per il component edit
  getUser(id: number) {
    return this.http.get(this.urlUsersAPI+id)
  }

  //metodo per modificare dato
  updateUser(user: any) {
    return this.http.put(this.urlUsersAPI+user.id, user)
  }

  //metodo per creare nuovo dato
  createUser(user: any) {
    return this.http.post(this.urlUsersAPI, user)
  }

}

