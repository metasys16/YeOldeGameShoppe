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
import { GameSearchComponent } from './components/game-search/game-search.component';
import { UserService } from './service/user.service';
import { GameSearchService } from './service/game-search.service';
import { GameService } from './service/game.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CartComponent,
    GameDetailComponent,
    GameListComponent,
    MyProfileComponent,
    GameSearchComponent,
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
    GameSearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
