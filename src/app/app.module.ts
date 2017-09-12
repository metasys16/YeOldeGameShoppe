import { AppRouterModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';

import { UserService } from './service/user.service';
import { GameService } from './service/game.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ShopComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpModule,
  ],
  providers: [
    UserService,
    GameService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
