import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataSharingService } from '../data-sharing.service';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: User;
  successFlag: boolean;
  errorFlag: boolean;

  constructor(public auth: AuthService, public dataSharing: DataSharingService, public router: Router) {
    this.user = new User();
    this.successFlag = false;
    this.errorFlag = false;
   }


  ngOnInit(): void {
    this.dataSharing.signinFlag = true;
    this.dataSharing.listingFlag = false;
    this.dataSharing.bookingsFlag = false;
    this.dataSharing.propertyFlag = false;
    this.dataSharing.signupFlag = false;
    this.dataSharing.wishlistFlag = false;
  }

  signInSubmit(signInForm: any) {
    this.successFlag = false;
    this.errorFlag = false;

    this.auth.signIn(this.user).subscribe(
      (res)=> {
        if(res) {
        this.user = new User();
        signInForm.form.markAsPristine();
        this.auth.currentUser = res;
        this.auth.router.navigateByUrl('');
        this.successFlag = true;
        console.log("signed In")
      }
      else {
        this.errorFlag = true;
        signInForm.form.markAsPristine();
      }
    },
    (error)=> {
      this.errorFlag = true;
    }
    );
  }

  goTo(){
    this.router.navigateByUrl('/signup');
  
  }

}