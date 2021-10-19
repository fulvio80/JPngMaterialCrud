import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  private login = false

  constructor() { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.login;
  }

  loginApp(email: string, password: string) {
    //simulo il server
    if(email === 'admin@admin.com' && password === '12345') {
      this.login = true
    } else {
      alert('Email e Passsword errate!!!')
    }

  }

  //creo un metodo per il logout che verrà richiamato nel componente header
  logoutApp() {
    this.login = false;
  }
}
