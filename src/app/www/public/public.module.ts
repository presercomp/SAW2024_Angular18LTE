import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'', component: PublicComponent, children: [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent}
  ]},
  
];

@NgModule({
  declarations: [
    LoginComponent,
    PublicComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
