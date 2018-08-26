import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[hideAll]'
})
export class NavBarDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'display', 'none');
  }
}
