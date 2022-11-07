import { Component } from '@angular/core';
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
              public locationService: LocationService) {
    userService.signUp;
    userService.signIn;
    locationService.setLocations();
}

}
