import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './components/my-profil/my-profile.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRouteModule } from './login-route.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRouteModule,
    FormsModule,
  ],
  declarations: [
    LoginComponent,
    MyProfileComponent
  ]
})
export class LoginModule {}
