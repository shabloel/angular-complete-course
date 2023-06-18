import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicAttributeDirective]'
})
export class BasicAttributeDirectiveDirective {


  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
   }

}
