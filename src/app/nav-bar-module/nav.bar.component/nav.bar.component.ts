import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginData} from '../../login.module/LoginData';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="nav-bar">
      <div class="container">
        <div class="row">
          
          <div *ngIf="userInfo == null" class="col-3">
            <nav>
              <a routerLink="/login" routerLinkActive="active">Login</a>
            </nav>
          </div>
          
          <div class="col-3">
            <nav>
              <a routerLink="/content" routerLinkActive="active">Content</a>
            </nav>
          </div>
          
          <div *ngIf="userInfo == null" class="col-3">
            <nav>
              <a routerLink="/signUp" routerLinkActive="active">SignUp</a>
            </nav>
          </div>

          <div *ngIf="userInfo != null" class="col-3">
            <a href="/" (click)="logOut()" >Log Out</a>
          </div>
          
        </div>
      </div>
    </div>
    
    <div *ngIf="userInfo!=null">
      <p>Hello, {{userInfo.userName}}</p>
    </div>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['nav.bar.component.css']
})
export class NavBarComponent implements OnInit {
  userInfo: LoginData;


  ngOnInit(): void {
    let userInfoText = localStorage.getItem('currentUser');
    this.userInfo = JSON.parse(userInfoText);
    console.log('currentUser is' + this.userInfo);
  }

  logOut() {
    localStorage.clear();
    window.location.reload();
  }
}
