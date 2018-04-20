import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form.component';
import { LoginPageComponent } from './containers/login-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginFormComponent, LoginPageComponent]
})
export class AuthModule { }
