import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-preloader',
  template: `

    <div class="loader" [hidden]="!showSpinner">
      <div class="loader-inner">
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
      </div>
    </div>
    
  `,
  styleUrls: ['preloader.component.css']
})
export class PreloaderComponent {
  @Input()
  showSpinner: boolean = false;
}
