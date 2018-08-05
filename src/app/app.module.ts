import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavBarModule} from './nav-bar-module/nav.bar.module';
import {ContentModule} from './content.module/content.module';
import {LoginModule} from './login.module/login.module';
import {AppRoutingModule} from './app.routing.module';
import {NavBarRoutingModule} from './nav-bar-module/nav.bar.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NavBarModule, ContentModule, LoginModule, AppRoutingModule, NavBarRoutingModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
