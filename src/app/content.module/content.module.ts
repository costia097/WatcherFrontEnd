import {NgModule} from '@angular/core';
import {ContentComponent} from './content.component/content.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ContentInfoComponent} from './content.info.component/content.info.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {SignUpComponent} from './signUp.component/signUp.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SignUpEmailConfirmationComponent} from './email.confirmation.component/signUpEmailConfirmation.component';
import {SignUpConfirmationComponent} from './signUp.confirmation.component/signUp.confirmation.component';

@NgModule({
  declarations: [
    ContentComponent, ContentInfoComponent, SignUpComponent, SignUpEmailConfirmationComponent, SignUpConfirmationComponent
  ],
  imports: [
    CommonModule, RouterModule, NgxPaginationModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  exports: [
    ContentComponent, ContentInfoComponent, SignUpComponent, SignUpEmailConfirmationComponent, SignUpConfirmationComponent
  ],
  providers: [
  ]
})
export class ContentModule {
}
