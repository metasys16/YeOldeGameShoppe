import { AppRouterModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GameDetailComponent } from './game/game-detail.component'
import { GameDetailService } from './game/game-detail.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserService } from './user/profile/user.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpModule
  ],
  providers: [
    UserService,
    GameDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
