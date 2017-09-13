import { AppRouterModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GameDetailComponent } from './components/game/game-detail.component';
import { GameDetailService } from './service/game-detail.service';
import { GameListComponent } from './components/game-list/game-list.component';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { MyProfileComponent } from './components/my-profil/my-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginModule } from './login.module';
import { UserService } from './service/user.service';
import { GameService } from './service/game.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from './service/cart.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CartComponent,
    GameDetailComponent,
    GameListComponent,
    CartComponent,
    MyProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRouterModule,
    HttpModule,
    LoginModule,
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
