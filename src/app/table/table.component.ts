import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  //intestazioni di colonna
  displayedColumns: string[] = ['id', 'name', 'username', 'city', 'email', 'phone', 'action' ];
  dataSource!: any;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    //inserisco in datasource il ritorno della response, successiva alla sottoscrizione all'observable contente users
    this.userService.getAllUsers().subscribe(response => this.dataSource = response)
  }

  removeUsers(element: any) {
    this.userService.deleteUser(element.id).subscribe(response => {
      //simulazione della cancellazione dati sulla view
      this.dataSource = this.dataSource.filter((user: { id : any; }) => user.id !== element.id)
    })
  }
  
  //metodo che tramite l'id indirizza la navigazione sul component edit  relativo
  selectEditUsers(element: any) {
    this.router.navigate(['users', element.id, 'edit'])
  }


}



