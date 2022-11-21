import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PropertyComponent } from './property/property.component';
import { ListingLocationComponent } from './listing-location/listing-location.component';
import { ListingNameComponent } from './listing-name/listing-name.component';
import { HomeComponent } from './home/home.component';
import { BookingsComponent } from './bookings/bookings.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ListingComponent } from './listing/listing.component';
import { CommonModule } from '@angular/common';
import { ListingTypeComponent } from './listing-type/listing-type.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    PropertyComponent,
    ListingLocationComponent,
    ListingNameComponent,
    HomeComponent,
    BookingsComponent,
    WishlistComponent,
    ListingComponent,
    ListingTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
