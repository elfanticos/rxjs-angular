import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShareReplayComponent } from './share-replay/share-replay.component';

const routes: Routes = [
  {
    path: 'share-replay',
    component: ShareReplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
