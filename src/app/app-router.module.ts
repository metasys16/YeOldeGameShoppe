import { ProfileComponent } from './components/profile/profile.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'user/:id', component: ProfileComponent },
  {path: 'gameList', component: GameListComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}
