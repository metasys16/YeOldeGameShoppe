import { AppRouterModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ShopComponent } from './shop/shop.component';

import { UserService } from './user/profile/user.service';
import { GameService } from './game/game.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ShopComponent,
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
