import { AppRouterModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game/game-detail.component';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { MyProfileComponent } from './components/my-profil/my-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShopComponent } from './components/shop/shop.component';
import { LoginModule } from './login.module';
import { UserService } from './service/user.service';
import { GameService } from './service/game.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from './service/cart.service';
import { DeliveryService } from './service/delivery.service';
import { HttpModule } from '@angular/http';
import { GameDetailService } from './service/game-detail.service';
import { OrderComponent } from './components/order/order.component'


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ShopComponent,
    CartComponent,
    GameDetailComponent,
    GameListComponent,
    MyProfileComponent,
    OrderComponent,
    CartComponent,
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
    CartService,
    DeliveryService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
