import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {SignUpModel} from '../SignUpModel';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signUp',
  template: `
    <div class="main-login main-center">
      <form class="form-horizontal" [formGroup]="signUpForm">

        <div class="form-group">
          <label for="name" class="cols-sm-2 control-label">First Name</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <input type="text" class="form-control" name="name" placeholder="Enter your Name" formControlName="firstName"
                     [ngStyle]="{ 'border-bottom': signUpForm.get('firstName').invalid && signUpForm.get('firstName').touched ? 'red solid'
                  : signUpForm.get('firstName').valid && signUpForm.get('firstName').touched ? 'green solid' : 'aqua solid'}"/>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="name" class="cols-sm-2 control-label">Last Name</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <input type="text" class="form-control" name="name" placeholder="Enter your Name" formControlName="lastName"
                     [ngStyle]="{ 'border-bottom': signUpForm.get('lastName').invalid && signUpForm.get('lastName').touched ? 'red solid'
                  : signUpForm.get('lastName').valid && signUpForm.get('lastName').touched ? 'green solid' : 'aqua solid'}"/>
            </div>
          </div>
        </div>

        <p>
          <label>Date of birth</label>
        </p>
        <input type="date" class="input-form" formControlName="dateOfBirth" [ngStyle]="{ 'border-bottom': signUpForm.get('dateOfBirth').invalid && signUpForm.get('dateOfBirth').touched ? 'red solid'
                  : signUpForm.get('dateOfBirth').valid && signUpForm.get('dateOfBirth').touched ? 'green solid' : 'aqua solid'}"/>
        <br/>
        <br/>

        <div class="form-group">
          <label for="email" class="cols-sm-2 control-label">Your Email</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
              <input type="text" class="form-control" name="email" id="email" placeholder="Enter your Email" formControlName="email"
                     [ngStyle]="{ 'border-bottom': signUpForm.get('email').invalid && signUpForm.get('email').touched ? 'red solid'
                  : signUpForm.get('email').valid && signUpForm.get('email').touched ? 'green solid' : 'aqua solid'}"/>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="username" class="cols-sm-2 control-label">Login</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
              <input type="text" class="form-control" name="username" id="username" placeholder="Enter your login" formControlName="login"
                     [ngStyle]="{ 'border-bottom': signUpForm.get('login').invalid && signUpForm.get('login').touched ? 'red solid'
                  : signUpForm.get('login').valid && signUpForm.get('login').touched ? 'green solid' : 'aqua solid'}"/>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="password" class="cols-sm-2 control-label">Password</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
              <input type="password" class="form-control" name="password" id="password" placeholder="Enter your Password"
                     formControlName="password"
                     [ngStyle]="{ 'border-bottom': signUpForm.get('password').invalid && signUpForm.get('password').touched ? 'red solid'
                  : signUpForm.get('password').valid && signUpForm.get('password').touched ? 'green solid' : 'aqua solid'}"/>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
              <input type="password" class="form-control" name="confirm" placeholder="Confirm your Password"
                     formControlName="confirmPassword"
                     [ngStyle]="{ 'border-bottom': signUpForm.get('confirmPassword').invalid && signUpForm.get('confirmPassword').touched ? 'red solid'
                  : signUpForm.get('confirmPassword').valid && signUpForm.get('confirmPassword').touched ? 'green solid' : 'aqua solid'}"/>
            </div>
          </div>
        </div>

        <p>
          <input type="radio" value="M" formControlName="gender"> Male
          <input type="radio" value="F" formControlName="gender"> Female
        </p>

        <div class="form-group">
          <label for="confirm" class="cols-sm-2 control-label">Country</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
              <input type="password" class="form-control" name="confirm"  placeholder="Country"
                     formControlName="country"
                     [ngStyle]="{ 'border-bottom': signUpForm.get('country').invalid && signUpForm.get('country').touched ? 'red solid'
                  : signUpForm.get('country').valid && signUpForm.get('country').touched ? 'green solid' : 'aqua solid'}"/>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="confirm" class="cols-sm-2 control-label">Address</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
              <input type="password" class="form-control" name="confirm"  placeholder="Address"
                     formControlName="address"
                     [ngStyle]="{ 'border-bottom': signUpForm.get('address').invalid && signUpForm.get('address').touched ? 'red solid'
                  : signUpForm.get('address').valid && signUpForm.get('address').touched ? 'green solid' : 'aqua solid'}"/>
            </div>
          </div>
        </div>

        <p>
          <input type="checkbox" formControlName="agree">
          <label>Agree with rules</label>
        </p>

        <div class="form-group ">
          <button type="button" class="btn btn-outline-success btn-block submit-register-btn" [disabled]="!signUpForm.valid"
                  (click)="onSubmit()">Register
          </button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['signUp.component.css']
})
export class SignUpComponent {
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
  }

  signUpForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    login: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', [Validators.required, this.passwordEqualsValidator]],
    gender: ['', Validators.required],
    agree: [false, [Validators.required, Validators.requiredTrue]],
    dateOfBirth: ['', [Validators.required]],
    country:['',Validators.required],
    address: ['']
  });

  passwordEqualsValidator(control: FormControl): { [key: string]: boolean } | null {
    let password = control.root.get('password');
    if (password != null && control.value != null && !(control.value == password.value)) {
      return {'error': true};
    }
    return null;
  }

  onSubmit() {
    let signUpModel: SignUpModel = new SignUpModel();
    signUpModel.firstName = this.signUpForm.get('firstName').value;
    signUpModel.lastName = this.signUpForm.get('lastName').value;
    signUpModel.email = this.signUpForm.get('email').value;
    signUpModel.login = this.signUpForm.get('login').value;
    signUpModel.password = this.signUpForm.get('password').value;
    signUpModel.gender =  this.signUpForm.get('gender').value;
    signUpModel.dateOfBirth = this.signUpForm.get('dateOfBirth').value;
    signUpModel.country = this.signUpForm.get('country').value;
    signUpModel.address = this.signUpForm.get('address').value;
    this.http.post('http://localhost:9090/signUp', signUpModel).subscribe(value => {
      console.log('SignUp OK ');
      this.router.navigate(['/signUp/send'],{
        queryParams: {email: this.signUpForm.get('email').value}
      });
    },error1 => {
      console.log('Error while signUp ' + error1.toString());
    });
  }
}
