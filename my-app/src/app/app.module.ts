import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './componets/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './component/grid/grid.component';
import { PagenotFoundComponent } from './component/pagenot-found/pagenot-found.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LoginComponent,
    GridComponent,
    PagenotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
