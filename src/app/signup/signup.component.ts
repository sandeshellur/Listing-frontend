import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User;
  errorFlag:boolean;
  constructor( public auth:UserServiceService, public dataSharing: DataSharingService) {
    this.user = new User();
    this.errorFlag = false;
   }

  ngOnInit(): void {
    this.dataSharing.signupFlag=false;
  }
  
  signUpSubmit(signUpForm : any) {
    this.errorFlag = false;
    this.auth.signUp(this.user).subscribe(
      (res)=> {
        if(res.userId!=0) {
          this.user = new User();
          signUpForm.form.markAsPristine();
          this.auth.currentUser = res;
          this.auth.router.navigateByUrl('');
        } else {
          this.errorFlag = true;
          signUpForm.form.markAsPristine();
        }
      }
    );
  }

}
