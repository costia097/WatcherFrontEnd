import {NgModule} from '@angular/core';
import {ContentComponent} from './content.component/content.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ContentInfoComponent} from './content.info.component/content.info.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {SignUpComponent} from './signUp.component/signUp.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ContentComponent, ContentInfoComponent, SignUpComponent
  ],
  imports: [
    CommonModule, RouterModule, NgxPaginationModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    ContentComponent, ContentInfoComponent, SignUpComponent
  ],
  providers: [
  ]
})
export class ContentModule {
}
