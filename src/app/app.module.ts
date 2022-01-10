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
import { EvaCardComponent } from './pages/shared/eva-card/eva-card.component';
import { GalleryModalComponent } from './pages/shared/gallery-modal/gallery-modal.component';
import { BasicEvaCardComponent } from './pages/shared/basic-eva-card/basic-eva-card.component';
import { LightboxModule} from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';


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
    EvaCardComponent,
    GalleryModalComponent,
    BasicEvaCardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    GalleryModule,
    LightboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
