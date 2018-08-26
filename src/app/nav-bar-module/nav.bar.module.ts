import {NgModule} from '@angular/core';
import {NavBarComponent} from './nav.bar.component/nav.bar.component';
import {NavBarRoutingModule} from './nav.bar.routing.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NavBarDirective} from './nav.bar.component/nav.bar.directive';
@NgModule({
  declarations: [
    NavBarComponent, NavBarDirective
  ],
  imports: [NavBarRoutingModule, CommonModule, HttpClientModule],

  exports: [
    NavBarComponent, NavBarRoutingModule
  ],
  providers: []
})
export class NavBarModule {
}
