import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  errorFlag1: boolean;
  errorFlag2: boolean;

  constructor(public auth: UserServiceService, public dataSharing: DataSharingService, public router: Router) {
    this.user = new User();
    this.errorFlag1 = false;
    this.errorFlag2 = false;
   }


  ngOnInit(): void {
    this.dataSharing.signinFlag = true;
  }

  signInSubmit(signInForm: any) {
    this.auth.signIn(this.user).subscribe(
      (res)=> {
        if(res) {
        this.user = new User();
        signInForm.form.markAsPristine();
        this.auth.currentUser = res;
        this.auth.router.navigateByUrl('');
        console.log("signed In")
      }
      else {
        this.errorFlag1 = true;
        signInForm.form.markAsPristine();
      }
    },
    (error)=> {
      this.errorFlag2 = true;
    }
    );
  }

  goTo(){
    this.router.navigateByUrl('/signup');
  
  }

}