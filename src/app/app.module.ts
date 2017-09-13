import { AppRouterModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GameDetailComponent } from './components/game/game-detail.component'
import { GameDetailService } from './service/game-detail.service';
import {GameListComponent } from './components/game-list/game-list.component';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { MyProfileComponent } from './components/my-profil/my-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserService } from './service/user.service';
import { GameService } from './service/game.service';
import { CartService } from './service/cart.service';
import { HttpModule } from '@angular/http';
import { OrderComponent } from './components/order/order.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CartComponent,
    GameDetailComponent,
    GameListComponent,
    MyProfileComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpModule
  ],
  providers: [
    UserService,
    GameDetailService,
    GameService,
    CartService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
