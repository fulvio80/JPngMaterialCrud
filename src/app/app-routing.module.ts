import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './services/route-guard.service';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { TableComponent } from './table/table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users', component: TableComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'users/:id/edit', component: EditUserComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'users/new', component: NewUserComponent, canActivate: [RouteGuardService]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo:'users', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
