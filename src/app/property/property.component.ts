import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CategoryService } from '../category.service';
import { DataSharingService } from '../data-sharing.service';
import { LocationService } from '../location.service';
import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  reviews: string[]=[];

  constructor(public auth: AuthService,
    public locationService: LocationService,
    public categoryService: CategoryService,
    public propertyService: PropertyService,
    public dataSharing: DataSharingService,
    public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.propertyService.property = new Property();
    this.setProperty();
  }

  setProperty() {
    const propertyId = Number(this.route.snapshot.paramMap.get('propertyId'));
    console.log("All Properties");
    this.propertyService.getPropertyById(propertyId).subscribe((data: Property) => {this.propertyService.property = data});
  }

  userReview(reviewForm: any){
    
  }

}
