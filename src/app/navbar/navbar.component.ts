import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { LocationService } from '../location.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  locations: Location[];

  constructor(public locationService: LocationService, public dataSharingService: DataSharingService, public auth: UserServiceService) { 
    this.locations = [];
  }

  ngOnInit(): void {
  }

}
