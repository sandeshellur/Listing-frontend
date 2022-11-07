import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  currentUser: User;
  reviews: string[][];
  
  constructor(public http: HttpClient, public router: Router) {
    this.currentUser = new User();
    this.reviews = [];
  }

  signUp(user: any) {
    return this.http.post<User>('http://localhost:8080/signup', user);
  }

  signIn(user: any) {
    return this.http.post<User>('http://localhost:8080/login', user);
  }

  signOut() {
    this.currentUser = new User();
  }

  setWebsiteReviews() {
    this.http.get<string[][]>("http://localhost:8080/websitereviews").subscribe((data: string[][]) => {this.reviews = data});
  }

}
