import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingLocationComponent } from './listing-location/listing-location.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PropertyComponent } from './property/property.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path : 'signup', component : SignupComponent },
  { path : 'signin', component : SigninComponent },
  { path : 'listingsbylocation/:locationId', component : ListingLocationComponent },
  { path : '**', component : PageNotFoundComponent },
  { path : 'propertt/:propertyId', component : PropertyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
