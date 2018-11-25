import {NgModule} from '@angular/core';
import {LoginFormComponent} from './login.component/login.form.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {PreloaderComponent} from './preloader.component/preloader.component';

@NgModule({
  declarations: [
    LoginFormComponent, PreloaderComponent
  ],
  imports: [
    CommonModule, FormsModule, BrowserModule, ReactiveFormsModule, HttpClientModule, RouterModule
  ],
  exports: [
    LoginFormComponent,
    PreloaderComponent

  ]
})
export class LoginModule {
}
