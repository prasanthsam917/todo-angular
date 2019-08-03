import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent, Todo } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:userName', component: WelcomeComponent,canActivate:[RouteGaurdService] },
  { path: 'todos', component: ListTodosComponent,canActivate:[RouteGaurdService] },
  { path: 'logout', component: LogoutComponent},
  { path: 'todos/:id', component: TodoComponent,canActivate:[RouteGaurdService]},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
