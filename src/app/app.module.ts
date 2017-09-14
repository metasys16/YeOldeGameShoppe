import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRouterModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameDetailComponent } from './components/game/game-detail.component';
import { GameDetailService } from './service/game-detail.service';
import { GameListComponent } from './components/game-list/game-list.component';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
//import { MyProfileComponent } from './components/my-profil/my-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GameSearchComponent } from './components/game-search/game-search.component';
import { ShopComponent } from './components/shop/shop.component';
import { LoginModule } from './login.module';
import { UserService } from './service/user.service';
import { GameSearchService } from './service/game-search.service';
import { GameService } from './service/game.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from './service/cart.service';
import { DeliveryService } from './service/delivery.service';
import { HttpModule } from '@angular/http';
import { OrderComponent } from './components/order/order.component'

export const firebaseConfig = {
    apiKey: 'AIzaSyBEiqoujNEbGLpflGc0SvC9LwYkXsRvA4g',
    authDomain: 'yeoldegameshoppe-69b8e.firebaseapp.com',
    databaseURL: 'https://yeoldegameshoppe-69b8e.firebaseio.com',
    projectId: 'yeoldegameshoppe-69b8e',
    storageBucket: '',
    messagingSenderId: '929433934926'
};

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ShopComponent,
    CartComponent,
    GameDetailComponent,
    GameListComponent,
    OrderComponent,
    GameSearchComponent,
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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    UserService,
    GameDetailService,
    GameService,
    CartService,
    DeliveryService,
    GameSearchService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
