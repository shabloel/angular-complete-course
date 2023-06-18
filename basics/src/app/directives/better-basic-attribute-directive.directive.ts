import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterBasicAttributeDirective]'
})
export class BetterBasicAttributeDirectiveDirective {

  constructor(private element: ElementRef, renderer: Renderer2) { 
    renderer.setStyle(element.nativeElement, 'backgroundColor', 'blue');
  }

}
