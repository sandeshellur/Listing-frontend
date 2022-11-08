import { Component } from '@angular/core';
import { CategoryService } from './category.service';
import { LocationService } from './location.service';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listing';

  constructor(public userService: UserServiceService,
              public locationService: LocationService,
              public categoryService: CategoryService) {
    userService.setWebsiteReviews();
    categoryService.setCategories();
    locationService.setLocations();
}

}
