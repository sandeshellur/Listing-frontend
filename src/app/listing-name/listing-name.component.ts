import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { DataSharingService } from '../data-sharing.service';
import { LocationService } from '../location.service';
import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-listing-name',
  templateUrl: './listing-name.component.html',
  styleUrls: ['./listing-name.component.css']
})
export class ListingNameComponent implements OnInit {

  propName: string = '';
  stars: string[]=[];

  constructor(public locationService: LocationService,
    public categoryService: CategoryService,
    public propertyService: PropertyService,
    public dataSharing: DataSharingService,
    public route: ActivatedRoute,
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

    for(let i=0; i<5;i++)
      {this.stars[i]="fa fa-star checked";}
  }

  searchByName(searchForm: any) {
    let name = searchForm.value.propName;
    this.router.navigateByUrl("/listingsbyname/" + name);
  }

  setProperties() {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.propertyService.getPropertiesByName(name).subscribe((data: Property[]) => { this.propertyService.properties = data });
  }

}
