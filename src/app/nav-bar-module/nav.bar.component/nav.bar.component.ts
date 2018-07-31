import {Component, OnInit} from '@angular/core';
import {LoginData} from '../../login.module/LoginData';

@Component({
  selector: 'app-navbar',
  template: `
   <body>
   <div class="wrapper">
     <!-- Sidebar  -->
     <nav id="sidebar" [ngClass]="{'active':isHidden}">
       <div class="sidebar-header">
         <h3>Watcher</h3>
         <img class="logo-img" src="https://seeklogo.com/images/J/Java-logo-6BBEB11CBA-seeklogo.com.png"/>
         
       </div>

       <ul class="list-unstyled components">
         <p>Watcher features</p>
         <li class="active">
           <a href="#" data-toggle="collapse" aria-expanded="false" >Home</a>
         </li>
         <li>
           <a href="#">About</a>
         </li>
         <li>
           <a href="#" data-toggle="collapse" aria-expanded="false">Pages</a>
         </li>
       </ul>
     </nav>

     <!-- Page Content  -->
     <div id="content">

       <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container-fluid">

           <button type="button" id="sidebarCollapse" class="btn btn-info" (click)="hideSideBar()">
             <i class="fas fa-align-left"></i>
             <span>Toggle Sidebar</span>
           </button>
           
           <div>
             <img class="logo-img-nav-bar" src="http://www.sepiscreens.it/img/svg/logo.svg"/>
           </div>
           
           <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <i class="fas fa-align-justify"></i>
           </button>

           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="nav navbar-nav ml-auto">
               <div class="row navbar-content">
                 <li class="nav-item ">
                   <a class="nav-link" routerLink="/content" routerLinkActive="active">Content</a>
                 </li>
               </div>
               
               <li class="nav-item ">
                 <a class="nav-link" routerLink="/login" routerLinkActive="active">Login</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="#">Logout</a>
               </li>
             </ul>
           </div>
         </div>
       </nav>

       <router-outlet></router-outlet>
     </div>
   </div>
   </body>
  `,
  styleUrls: ['nav.bar.component.css']
})
export class NavBarComponent implements OnInit {
  userInfo: LoginData;
  isHidden: boolean = false;

  hideSideBar() {
    this.isHidden = !this.isHidden;
  }

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
