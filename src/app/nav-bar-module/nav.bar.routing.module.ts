import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginFormComponent} from '../login.module/login.component/login.form.component';
import {ContentComponent} from '../content.module/content.component/content.component';
import {ContentInfoComponent} from '../content.module/content.info.component/content.info.component';
import {SignUpComponent} from '../content.module/signUp.component/signUp.component';
import {SignUpEmailConfirmationComponent} from '../content.module/email.confirmation.component/signUpEmailConfirmation.component';
import {SignUpConfirmationComponent} from '../content.module/signUp.confirmation.component/signUp.confirmation.component';

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
      },
      {
        path: 'signUp/send',
        component: SignUpEmailConfirmationComponent
      },
      {
        path: 'signUp/confirm',
        component: SignUpConfirmationComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class NavBarRoutingModule {
}
