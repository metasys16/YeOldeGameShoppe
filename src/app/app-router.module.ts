
import { GameDetailComponent } from './game/game-detail.component';


import { MyProfileComponent } from './components/my-profil/my-profile.component';
import { ProfileComponent } from './components/profile/profile.component';

import { GameListComponent } from './components/game-list/game-list.component';

import { CartComponent } from './components/cart/cart.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'user/:id', component: ProfileComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'game/:id', component: GameDetailComponent },
  { path: 'gameList', component: GameListComponent},
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}
