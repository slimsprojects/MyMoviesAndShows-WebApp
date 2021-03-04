import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MovielistComponent} from './movielist/movielist.component';
import {TowatchComponent} from './towatch/towatch.component';

const routes: Routes = [
  {path:'towatch', component:TowatchComponent},
  {path:'movielist', component:MovielistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
