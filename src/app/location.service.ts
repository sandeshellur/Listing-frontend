import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from './location';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locations!: Location[];

  constructor(public http: HttpClient) {
    this.locations = [];
   }

  setLocations() {
    this.http.get<Location[]>("http://localhost:8080/locations").subscribe((data: Location[]) => { this.locations = data });
  }
}
