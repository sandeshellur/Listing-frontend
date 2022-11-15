import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataSharingService } from '../data-sharing.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User;
  errorFlag:boolean;
  successFlag:boolean;

  constructor( public auth:AuthService, public dataSharing: DataSharingService) {
    this.user = new User();
    this.errorFlag = false;
    this.successFlag = false;
   }

  ngOnInit(): void {
    this.dataSharing.homeFlag = false;
    this.dataSharing.listingFlag = false;
    this.dataSharing.bookingsFlag = false;
    this.dataSharing.propertyFlag = false;
    this.dataSharing.signinFlag = false;
    this.dataSharing.signupFlag = true;
    this.dataSharing.wishlistFlag = false;
  }
  
  signUpSubmit(signUpForm : any) {
    this.errorFlag = false;
    this.successFlag = false;

    this.auth.signUp(this.user).subscribe(
      (res) => {
        if (res.userId != 0) {
          this.user = new User();
          signUpForm.form.markAsPristine();
          this.auth.currentUser = res;
          this.auth.router.navigateByUrl('');
          this.successFlag = true;
        } else {
          this.errorFlag = true;
          signUpForm.form.markAsPristine();
        }
      },
      (error) => {
        this.errorFlag = true;
        signUpForm.form.markAsPristine();
      }
    );
  }

}
