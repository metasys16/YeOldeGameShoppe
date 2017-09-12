import { ProfileComponent } from './user/profile/profile.component';
import { GameDetailComponent } from './game/game-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'user/:id', component: ProfileComponent },
  { path: 'game/:id', component: GameDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}
