import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listing';

  constructor(public userService: UserServiceService) {
    userService.signUp;
    userService.signIn;
}

}
