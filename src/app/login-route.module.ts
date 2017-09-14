import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profil/my-profile.component';
import { AuthGuard } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const loginRoutes: Routes = [
  {
    path: 'my-profile',
    component: MyProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService,
  ]
})
export class LoginRouteModule {}