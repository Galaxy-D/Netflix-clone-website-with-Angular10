//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';

//Components
import { AppComponent } from './app.component';
import { SliderComponent } from '../app/components/slider/slider.component';
import { MovieService } from '../app/services/movie.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    SlickCarouselModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
