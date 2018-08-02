import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginData} from '../LoginData';

@Component({
  selector: 'app-login-form',
  template: `    
    <form class="form-signin" [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <label>
        Login:
        <div>
        <input type="text" formControlName="login"
               [ngStyle]="{ 'border-bottom': profileForm.get('login').invalid && profileForm.get('login').touched ? 'red solid'
                  : profileForm.get('login').valid && profileForm.get('login').touched ? 'green solid' : 'aqua solid'}"/>
        </div>
      </label>
      <label>
        Password:
        <div>
          <input type="password" formControlName="password"
                 [ngStyle]="{ 'border-bottom': profileForm.get('password').invalid && profileForm.get('password').touched ? 'red solid'
                  : profileForm.get('password').valid && profileForm.get('password').touched ? 'green solid' : 'aqua solid'}"/>
        </div>
      </label>
      <button class="btn btn-outline-success btn-block " type="submit" [disabled]="!profileForm.valid">Submit</button> 
    </form>
    
    <div class="loader" [hidden]="!showSpinner">
      <div class="loader-inner">
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['login.form.component.css']
})
export class LoginFormComponent {

  constructor(private fb: FormBuilder, private http: HttpClient, private route: Router) {
  }

  showSpinner: boolean = false;

  profileForm = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', Validators.required]
  });

  onSubmit() {
    let authHeader = 'Basic ' + btoa( this.profileForm.get('login').value + ':' + this.profileForm.get('password').value);
    this.showSpinner = true;
    this.http.post<LoginData>('http://localhost:9090/login', null,{
      responseType: 'json',
      headers: {'Authorization': authHeader}
    }).pipe().subscribe(value => {
      this.showSpinner = false;
      localStorage.setItem('currentUser', JSON.stringify(value));
      this.route.navigate(['/content']);
      window.location.reload();
    }, error1 => {
      this.showSpinner = false;
      console.log('Login failed ' + error1.toString());
    });
  }

}
