import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { DataSharingService } from '../data-sharing.service';
import { LocationService } from '../location.service';
import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-listing-type',
  templateUrl: './listing-type.component.html',
  styleUrls: ['./listing-type.component.css']
})
export class ListingTypeComponent implements OnInit {

  propName: string = '';
  stars: string[]=[];

  constructor(public locationService: LocationService,
    public categoryService: CategoryService,
    public propertyService: PropertyService,
    public dataSharing: DataSharingService,
    public route: ActivatedRoute,
    public router: Router) { }

    searchByName(searchForm: any) {
      let name = searchForm.value.propName;
      this.router.navigateByUrl("/listingsbyname/" + name);
    }
  

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

    for(let i=0; i<5;i++)
      {this.stars[i]="fa fa-star checked";}
  }

  setProperties() {
    const listFor = String(this.route.snapshot.paramMap.get('listFor'));
    this.propertyService.getPropertiesByListFor(listFor).subscribe((data: Property[]) => { this.propertyService.properties = data });
  }
}
