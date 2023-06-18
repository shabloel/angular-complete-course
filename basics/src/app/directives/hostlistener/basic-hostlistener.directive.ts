import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHostlistener]'
})
export class BasicHostlistenerDirective {

  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'white');
  }

  constructor(private element: ElementRef, private renderer: Renderer2) { 
    
  }

}
