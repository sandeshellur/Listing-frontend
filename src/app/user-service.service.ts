import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  reviews: string[][];
  
  constructor(public http: HttpClient, public router: Router) {
    this.reviews = [];
  }

  setWebsiteReviews() {
    this.http.get<string[][]>("http://localhost:8080/websitereviews").subscribe((data: string[][]) => {this.reviews = data});
  }

}
