import { AppRouterModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GameListComponent } from './components/game-list/game-list.component';
import { AppComponent } from './app.component';
import { MyProfileComponent } from './components/my-profil/my-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserService } from './service/user.service';
import { GameService } from './service/game.service';
import { HttpModule } from '@angular/http';

import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CartComponent,
    GameListComponent,
    MyProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpModule,
  ],
  providers: [
    UserService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
