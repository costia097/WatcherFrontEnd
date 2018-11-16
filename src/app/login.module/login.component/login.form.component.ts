import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginData} from '../LoginData';

@Component({
  selector: 'app-login-form',
  template: `
    
    <div *ngIf="showAnyAlert && !sucAuth" class="alert alert-danger">
      <strong>Danger!</strong> Authentication failed bad credentials.
    </div>

    <div *ngIf="showAnyAlert && sucAuth" class="alert alert-success">
      <strong>Success!</strong> Authentication  successful.
    </div>
    
    <div class="main-login main-center">
      <form class="form-signin" [formGroup]="profileForm" (ngSubmit)="onSubmit()">
        <label>
          Login:
          <div>
            <input type="text" formControlName="login"
                   [ngStyle]="{ 'border-bottom': profileForm.get('login').invalid && profileForm.get('login').touched ? 'red solid'
                  : profileForm.get('login').valid && profileForm.get('login').touched ? 'green solid' : 'aqua solid'}" class="form-control forma-sign-in "/>
          </div>
        </label>
        <label>
          Password:
          <div class="">
            <input type="password" formControlName="password"
                   [ngStyle]="{ 'border-bottom': profileForm.get('password').invalid && profileForm.get('password').touched ? 'red solid'
                  : profileForm.get('password').valid && profileForm.get('password').touched ? 'green solid' : 'aqua solid'}" class="form-control forma-sign-in "/>
          </div>
        </label>
        <button class="btn btn-outline-success btn-block " type="submit" [disabled]="!profileForm.valid">Submit</button>
      </form>
    </div>
    
    <app-preloader [showSpinner]="showSpinner"></app-preloader>
  `,
  styleUrls: ['login.form.component.css']
})
export class LoginFormComponent {

  constructor(private fb: FormBuilder, private http: HttpClient, private route: Router) {
  }

  showSpinner: boolean = false;
  sucAuth: boolean = false;
  showAnyAlert: boolean = false;

  profileForm = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', Validators.required]
  });

  onSubmit() {
    this.showAnyAlert = false;
    let login = this.profileForm.get('login').value;
    let password = this.profileForm.get('password').value;

    this.showSpinner = true;
    this.http.post<LoginData>('http://localhost:9090/login', {
      login: login,
      password: password
    }, {
      responseType: 'json'
    }).pipe().subscribe(value => {
      this.showAnyAlert = true;
      this.showSpinner = false;
      this.sucAuth = true;
      localStorage.setItem('currentUser', JSON.stringify(value));
      this.route.navigate(['/content']);
      window.location.reload();
    }, error1 => {
      // cant resolve any response cros-origin!!
      this.showAnyAlert = true;
      this.showSpinner = false;
      this.sucAuth = false;
      console.log('Login failed ' + error1.toString());
    });
  }

}
