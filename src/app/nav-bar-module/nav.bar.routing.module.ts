import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginFormComponent} from '../login.module/login.component/login.form.component';
import {ContentComponent} from '../content.module/content.component/content.component';
import {ContentInfoComponent} from '../content.module/content.info.component/content.info.component';
import {SignUpComponent} from '../content.module/signUp.component/signUp.component';
import {AppComponent} from '../app.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginFormComponent
      },
      {
        path: 'content',
        component: ContentComponent
      },
      {
        path: 'content/:id',
        component: ContentInfoComponent
      },
      {
        path: 'signUp',
        component: SignUpComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class NavBarRoutingModule {
}
