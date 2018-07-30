import {NgModule} from '@angular/core';
import {NavBarComponent} from './nav.bar.component/nav.bar.component';
import {NavBarRoutingModule} from './nav.bar.routing.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [NavBarRoutingModule, CommonModule],

  exports: [
    NavBarComponent, NavBarRoutingModule
  ],
  providers: []
})
export class NavBarModule {
}
