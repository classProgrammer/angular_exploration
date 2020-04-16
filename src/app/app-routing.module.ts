import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotobookPageComponent} from './photobook-page/photobook-page.component';
import {PhotobookViewComponent} from './photobook-view/photobook-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PhotobookViewComponent },
  { path: 'edit', component: PhotobookPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
