import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { DataSharingService } from '../data-sharing.service';
import { LocationService } from '../location.service';
import { Property } from '../property';
import { PropertyService } from '../property.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  locationId: number;
  properties: Property[];

  constructor(public locationService: LocationService,
    public categoryService: CategoryService,
    public userService: UserServiceService,
    public propertyService: PropertyService,
    public dataSharing: DataSharingService,
    public route: ActivatedRoute,
    public router: Router) { 
      this.properties = [];
      this.locationId = 1;
    }

  ngOnInit(): void {
    this.dataSharing.homeFlag = true;
    this.dataSharing.listingFlag = false;
    this.dataSharing.bookingsFlag = false;
    this.dataSharing.propertyFlag = false;
    this.dataSharing.signinFlag = false;
    this.dataSharing.signupFlag = false;
    this.dataSharing.wishlistFlag = false;

    this.makeDashboard();
  }

  sendFormToListings(filterForm: any){
    this.dataSharing.formData = filterForm.value;
    console.log(this.dataSharing.formData);
    this.router.navigateByUrl('/listings');
  }

  makeDashboard(){
    this.locationId = Number(this.route.snapshot.paramMap.get('locationId'));
    this.propertyService.getPropertiesByLocation(this.locationId).subscribe((data: Property[]) => {this.propertyService.properties = data})
  }

}
