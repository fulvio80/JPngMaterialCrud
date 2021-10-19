import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user: any = {name: '', username: '', email: ''}

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  //metodo che in assenza di server simula con alert l'inserimento di un nuovo dato
  //e indirizza sulla view users
  createUser() {
    this.userService.createUser(this.user)
    .subscribe(response => {
      alert('oggetto aggiunto' + JSON.stringify(response))
    })
    this.router.navigate(['users'])
  }

}
