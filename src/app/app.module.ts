import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './layout/header-navbar/header-navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EvangelionComponent } from './pages/evangelion/evangelion.component';
import { OtherComponent } from './pages/other/other.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { BasicCardComponent } from './pages/shared/basic-card/basic-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    EvangelionComponent,
    OtherComponent,
    WishlistComponent,
    BasicCardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
