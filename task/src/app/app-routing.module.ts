import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
{path:"login",component:LoginComponent}
    ]
  
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
