import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Directive({
  selector: '[appStructuralDirective]'
})
export class StructuralDirectiveDirective {

  @Input() set appStructuralDirective(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      //removes the template from the ControlContainer.
      this.vcRef.clear;
    }
  }

  //template ref creates a ng-template, the containerRef is where you render this template.
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

   }

}
