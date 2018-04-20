import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginFormComponent],
  providers: [AuthGuard]
})
export class AuthModule { }
