import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {SignUpModel} from '../SignUpModel';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CacheService} from '../../services/CacheService';
import {EmailsLoginResponse} from '../../services/EmailsLoginResponse';


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
          <div *ngIf="signUpForm.get('firstName').invalid && signUpForm.get('firstName').touched">
            <i class="glyphicon glyphicon-remove" style="color: red"></i>
            <p style="color: red">
              Cannot be empty!!!
            </p>
          </div>
          <div *ngIf="signUpForm.get('firstName').valid && signUpForm.get('firstName').touched">
            <i class="glyphicon glyphicon-ok" style="color: green"></i>
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
          <div *ngIf="signUpForm.get('lastName').invalid && signUpForm.get('lastName').touched">
            <i class="glyphicon glyphicon-remove" style="color: red"></i>
            <p style="color: red">
              Cannot be empty!!!
            </p>
          </div>
          <div *ngIf="signUpForm.get('lastName').valid && signUpForm.get('lastName').touched">
            <i class="glyphicon glyphicon-ok" style="color: green"></i>
          </div>
        </div>

        <p>
          <label>Date of birth</label>
        </p>
        <input type="date" class="input-form" formControlName="dateOfBirth" [ngStyle]="{ 'border-bottom': signUpForm.get('dateOfBirth').invalid && signUpForm.get('dateOfBirth').touched ? 'red solid'
                  : signUpForm.get('dateOfBirth').valid && signUpForm.get('dateOfBirth').touched ? 'green solid' : 'aqua solid'}"/>
        <br/>
        <br/>

        <div *ngIf="this.signUpForm.get('email').invalid && emailAlreadyUse" class="alert alert-danger">
          <strong>Danger!</strong> emailAlreadyUse.
        </div>
        <div class="form-group">
          <label for="email" class="cols-sm-2 control-label">Your Email</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <input type="text" class="form-control" name="email" id="email" placeholder="Enter your Email" formControlName="email"
                     [ngStyle]="{ 'border-bottom': signUpForm.get('email').invalid && signUpForm.get('email').touched ? 'red solid'
                  : signUpForm.get('email').valid && signUpForm.get('email').touched ? 'green solid' : 'aqua solid'}"/>
            </div>
          </div>
          <div *ngIf="signUpForm.get('email').invalid && signUpForm.get('email').touched">
            <i class="glyphicon glyphicon-remove" style="color: red"></i>
            <p style="color: red">
              Email empty or already use!!!
            </p>
          </div>
          <div *ngIf="signUpForm.get('email').valid && signUpForm.get('email').touched">
            <i class="glyphicon glyphicon-ok" style="color: green"></i>
          </div>
        </div>

        <div *ngIf="this.signUpForm.get('login').invalid && loginAlreadyUse" class="alert alert-danger">
          <strong>Danger!</strong> loginAlreadyUse.
        </div>
        <div class="form-group">
          <label for="username" class="cols-sm-2 control-label">Login</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <input type="text" class="form-control" name="username" id="username" placeholder="Enter your login" formControlName="login"
                     [ngStyle]="{ 'border-bottom': signUpForm.get('login').invalid && signUpForm.get('login').touched ? 'red solid'
                  : signUpForm.get('login').valid && signUpForm.get('login').touched ? 'green solid' : 'aqua solid'}"/>
            </div>
          </div>
          <div *ngIf="signUpForm.get('login').invalid && signUpForm.get('login').touched">
            <i class="glyphicon glyphicon-remove" style="color: red"></i>
            <p style="color: red">
              Login empty or already use!!!
            </p>
          </div>
          <div *ngIf="signUpForm.get('login').valid && signUpForm.get('login').touched">
            <i class="glyphicon glyphicon-ok" style="color: green"></i>
          </div>
        </div>

        <div class="form-group">
          <label for="password" class="cols-sm-2 control-label">Password</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <input type="password" class="form-control" name="password" id="password" placeholder="Enter your Password"
                     formControlName="password"
                     [ngStyle]="{ 'border-bottom': signUpForm.get('password').invalid && signUpForm.get('password').touched ? 'red solid'
                  : signUpForm.get('password').valid && signUpForm.get('password').touched ? 'green solid' : 'aqua solid'}"/>
            </div>
          </div>
          <div *ngIf="signUpForm.get('password').invalid && signUpForm.get('password').touched">
            <i class="glyphicon glyphicon-remove" style="color: red"></i>
            <p style="color: red">
              Password less then 6 symbols!!!
            </p>
          </div>
          <div *ngIf="signUpForm.get('password').valid && signUpForm.get('password').touched">
            <i class="glyphicon glyphicon-ok" style="color: green"></i>
          </div>
        </div>

        <div class="form-group">
          <label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <input type="password" class="form-control" name="confirm" placeholder="Confirm your Password"
                     formControlName="confirmPassword"
                     [ngStyle]="{ 'border-bottom': signUpForm.get('confirmPassword').invalid && signUpForm.get('confirmPassword').touched ? 'red solid'
                  : signUpForm.get('confirmPassword').valid && signUpForm.get('confirmPassword').touched && signUpForm.get('password').valid  ? 'green solid' : 'aqua solid'}"/>
            </div>
          </div>
          <div *ngIf="signUpForm.get('confirmPassword').invalid && signUpForm.get('confirmPassword').touched">
            <i class="glyphicon glyphicon-remove" style="color: red"></i>
            <p style="color: red">
              Passwords not equals or less then 6 symbols
            </p>
          </div>
          <div *ngIf="signUpForm.get('confirmPassword').valid && signUpForm.get('confirmPassword').touched  && signUpForm.get('password').valid">
            <i class="glyphicon glyphicon-ok" style="color: green"></i>
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
    
    <app-preloader [showSpinner]="showSpinner"></app-preloader>
  `,
  styleUrls: ['signUp.component.css'],
  providers: [CacheService]
})
export class SignUpComponent {
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private cache: CacheService) {
  }

  showSpinner: boolean = false;
  emailAlreadyUse: boolean = false;
  loginAlreadyUse: boolean = false;
  allData: EmailsLoginResponse = new EmailsLoginResponse();

  signUpForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email, this.emailUniqueValidator.bind(this)]],
    login: ['', [Validators.required, this.loginUniqueValidator.bind(this)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, this.passwordEqualsValidator, Validators.minLength(6)]],
    gender: ['', Validators.required],
    agree: [false, [Validators.required, Validators.requiredTrue]],
    dateOfBirth: ['', [Validators.required]],
    country: ['', Validators.required],
    address: ['']
  });

  passwordEqualsValidator(control: FormControl): { [key: string]: boolean } | null {
    let password = control.root.get('password');
    if (password != null && control.value != null && !(control.value == password.value)) {
      return {'error': true};
    }
    return null;
  }


  emailUniqueValidator(control: FormControl): { [key: string]: boolean } | null {
    this.emailAlreadyUse = false;
    let email = control.root.get('email');
    this.getAllLogins();
    if (email != null && email.value != null && !(email.value.toString() == '')) {
      let emailValue = email.value;
      // @ts-ignore
      if (this.allData._allEmails.includes(emailValue)) {
        this.emailAlreadyUse = true;
        return {'error': true};
        // @ts-ignore
      }
    }
    return null;
  }

  loginUniqueValidator(control: FormControl): { [key: string]: boolean } | null {
    this.loginAlreadyUse = false;
    let login = control.root.get('login');
    this.getAllLogins();
    if (login != null && login.value != null && !(login.value.toString() == '')) {
      let loginValue = login.value;
      // @ts-ignore
      if (this.allData._allLogins.includes(loginValue)) {
        this.loginAlreadyUse = true;
        return {'error': true};
      }
    }
    return null;
  }

  public refreshCache(newLogin: string, newEmail: string) {
    let allDataTemp = localStorage.getItem('allData');
    let allDataTempObj: EmailsLoginResponse;
    if (allDataTemp != null) {
      allDataTempObj = JSON.parse(allDataTemp);
      // @ts-ignore
      allDataTempObj._allLogins.push(newLogin);
      // @ts-ignore
      allDataTempObj._allEmails.push(newEmail);
      localStorage.setItem('allData', JSON.stringify(allDataTempObj));
    }
  }

  public getAllLogins() {
    let allDataTemp = localStorage.getItem('allData');
    if (allDataTemp != null) {
      this.allData = JSON.parse(allDataTemp);
    }
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
    this.showSpinner = true;
    this.refreshCache(signUpModel.login, signUpModel.email);
    this.http.post('http://localhost:9090/signUp', signUpModel).subscribe(value => {
      this.showSpinner = false;
      console.log('SignUp OK ');
      this.router.navigate(['/signUp/send'],{
        queryParams: {email: this.signUpForm.get('email').value}
      });
    },error1 => {
      this.showSpinner = false;
      console.log('Error while signUp ' + error1.toString());
    });
  }
}
