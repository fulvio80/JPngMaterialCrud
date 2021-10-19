import { RouteGuardService } from './../services/route-guard.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private routeGuardService: RouteGuardService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.routeGuardService.logoutApp();
    this.router.navigate(['/login'])
  }

}
