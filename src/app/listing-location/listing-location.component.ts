import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CategoryService } from '../category.service';
import { DataSharingService } from '../data-sharing.service';
import { LocationService } from '../location.service';
import { Property } from '../property';
import { PropertyService } from '../property.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-listing-location',
  templateUrl: './listing-location.component.html',
  styleUrls: ['./listing-location.component.css']
})
export class ListingLocationComponent implements OnInit {
  [x: string]: any;

  propLocation: string = '';
  stars: string[] = [];

  constructor(public locationService: LocationService,
              public categoryService: CategoryService,
              public propertyService: PropertyService,
              public dataSharing: DataSharingService,
              public route: ActivatedRoute,
              public auth: AuthService,
              public router: Router) { }

  ngOnInit(): void {
    this.dataSharing.homeFlag = false;
    this.dataSharing.listingFlag = true;
    this.dataSharing.bookingsFlag = false;
    this.dataSharing.propertyFlag = false;
    this.dataSharing.signinFlag = false;
    this.dataSharing.signupFlag = false;
    this.dataSharing.wishlistFlag = false;

    this.propertyService.properties = [];
    this.setProperties();

    for(let i=0; i<5; i++)
    {
      this.stars[i] = "fa fa-star checked";
    }

  }

  searchByLocation(searchForm: any) {
    let location = searchForm.value.propLocation;
    this.router.navigateByUrl("/listingbylocation/" + location)
  }

  setProperties() {
    const locationId = Number(this.route.snapshot.paramMap.get('locationId'));
    this.propertyService.getPropertiesByLocation(locationId).subscribe((data: Property[]) => { this.propertyService.properties = data });
  }

}
