import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { HomeComponent } from './home/home.component';
import { ListingLocationComponent } from './listing-location/listing-location.component';
import { ListingNameComponent } from './listing-name/listing-name.component';
import { ListingTypeComponent } from './listing-type/listing-type.component';
import { ListingComponent } from './listing/listing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PropertyComponent } from './property/property.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path : '', redirectTo: 'home/1', pathMatch : 'full' },
  { path : 'home/:locationId', component : HomeComponent },
  { path : 'signup', component : SignupComponent },
  { path : 'signin', component : SigninComponent },
  { path : 'listings', component : ListingComponent },
  { path : 'listingsbytype/:listFor', component : ListingTypeComponent },
  { path : 'listingsbyname/:name', component : ListingNameComponent },
  { path : 'listingsbylocation/:locationId', component : ListingLocationComponent },
  { path : 'property/:propertyId', component : PropertyComponent },
  { path : 'wishlist/:userId', component : WishlistComponent },
  { path : 'bookings/:userId', component : BookingsComponent },
  { path : '**', component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
