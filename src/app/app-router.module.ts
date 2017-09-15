
import { GameDetailComponent } from './components/game/game-detail.component';


import { MyProfileComponent } from './components/my-profil/my-profile.component';
import { ProfileComponent } from './components/profile/profile.component';

import { GameListComponent } from './components/game-list/game-list.component';

import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { LoginComponent } from './components/login/login.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';

import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:username', component: ProfileComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'game/:id', component: GameDetailComponent },
  { path: 'gameList', component: GameListComponent},
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}
