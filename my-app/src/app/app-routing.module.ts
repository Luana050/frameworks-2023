import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PagenotFoundComponent } from './component/pagenot-found/pagenot-found.component';
import { GridComponent } from './component/grid/grid.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeroComponent } from './componets/hero/hero.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'hero' , component: HeroComponent},
  {path: 'grid', component: GridComponent},
  {path: 'task', component: TaskComponent },
  {path: 'dashboard', component: DashboardComponent},
  
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: PagenotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
