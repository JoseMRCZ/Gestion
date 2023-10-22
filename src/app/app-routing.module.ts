import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component'
import {AppComponent} from './app.component'



const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent },
  {path: 'inicio', component: AppComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
