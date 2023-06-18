import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective {

  @Input() textColor!: string;

  //if you set this variable equal to the selector, you can use the standard square bracket notation
  @Input() appHostbinding!: string;

  @HostBinding('style.backgroundColor') backGroundColor: string = "yellow"

  @HostBinding('style.fontSize') size: string = "15px"

  @HostBinding('style.color') color: string = this.textColor; 

  @HostListener('mouseenter') mouseover() {
    this.backGroundColor = this.textColor;
    this.size = this.appHostbinding;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backGroundColor = 'white'
    this.size = '15px';
  }

  constructor() { }

}
