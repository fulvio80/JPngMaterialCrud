import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user!: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    //leggo l'id che mi passa il componente table, poi leggo l'id corrispettivo dal service,
    //e con l'ultimo abbonamento inserisco la response (oggetto completo) in user
    this.route.params.subscribe(params => 
      this.userService.getUser(params.id)
      .subscribe(response => this.user = response))
  }
  
  //metodo che con il binding bidirezionale consente di scrivere sull'oggetto.
  //In assenza di server simulo con un alert l'oggetto modificato, e poi con un navigate
  //reindirizzo alla pagina users con la tabella dei dati
  editUser() {
    this.userService.updateUser(this.user).subscribe(response => {
      alert('Oggetto modificato!' + JSON.stringify(response))
    })
    this.router.navigate(['users'])
  }

}
