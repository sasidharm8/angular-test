import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { RandomService } from './random.service';

const appRoutes: Routes =[
  { path: 'Home', component: HomeComponent },
  { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  }
]
@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [RandomService]
})
export class AppModule { }
