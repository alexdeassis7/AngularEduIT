import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeService } from './services/bike.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImagesService } from './services/images.service';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { AboutComponent } from './components/about/about.component';
import { FilterimagesPipe } from './filterimages.pipe';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ImageDetailsComponent,
    ImageGalleryComponent,
    AboutComponent,
    ViewRegistrationComponent,
    FilterimagesPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BikeService, ImagesService, FilterimagesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
