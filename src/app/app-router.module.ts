
import { GameDetailComponent } from './game/game-detail.component';


import { MyProfileComponent } from './components/my-profil/my-profile.component';
import { ProfileComponent } from './components/profile/profile.component';

import { GameListComponent } from './components/game-list/game-list.component';

import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'user/:id', component: ProfileComponent },
  { path: 'game/:id', component: GameDetailComponent },
  { path: 'gameList', component: GameListComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}
