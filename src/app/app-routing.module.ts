import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ContactComponent} from './pages/contact/contact.component';
import {EvangelionComponent} from './pages/evangelion/evangelion.component';
import {OtherComponent} from './pages/other/other.component';
import {WishlistComponent} from './pages/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'contact', component: ContactComponent },
  { path: 'evangelion', component: EvangelionComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'other', component: OtherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
