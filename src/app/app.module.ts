import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/usages/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsHomeComponent } from './components/usages/news-home/news-home.component';
import { EventsComponent } from './components/usages/events/events.component';
import { GalleryComponent } from './components/usages/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    NewsHomeComponent,
    EventsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
