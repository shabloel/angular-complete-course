import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './components/databinding/property-binding/property-binding.component';
import { FormsModule } from '@angular/forms';
import { CustomPropertyBindingComponent } from './components/databinding/custom-property-binding/custom-property-binding.component';
import { CustomPropertyBindingChildComponent } from './components/databinding/custom-property-binding-child/custom-property-binding-child.component';
import { TwoWayBindingComponent } from './components/databinding/two-way-binding/two-way-binding.component';
import { StringInterpolationComponent } from './components/databinding/string-interpolation/string-interpolation.component';
import { SimpleAttributeDirectiveComponent } from './components/attribute-directives/simple-attribute-directive/simple-attribute-directive.component';
import { LocalReferencesComponent } from './components/local-references/local-references.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { ContentChildComponent } from './components/content-child/content-child.component';
import { BasicAttributeDirectiveDirective } from './directives/basic-attribute-directive.directive';
import { TestComponentComponent } from './directives/test-component.component';
import { BetterBasicAttributeDirectiveDirective } from './directives/better-basic-attribute-directive.directive';
import { BasicHostlistenerDirective } from './directives/hostlistener/basic-hostlistener.directive';
import { SecondTestComponent } from './directives/hostlistener/second-test.component';
import { HostbindingDirective } from './directives/hostbinding/hostbinding.directive';
import { ThirdTestComponent } from './directives/hostbinding/third-test.component';
import { StructuralDirectiveDirective } from './directives/structural-directive/structural-directive.directive';
import { FourthTestComponent } from './directives/structural-directive/fourth-test.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    CustomPropertyBindingComponent,
    CustomPropertyBindingChildComponent,
    TwoWayBindingComponent,
    StringInterpolationComponent,
    SimpleAttributeDirectiveComponent,
    LocalReferencesComponent,
    NgContentComponent,
    ContentChildComponent,
    BasicAttributeDirectiveDirective,
    TestComponentComponent,
    BetterBasicAttributeDirectiveDirective,
    BasicHostlistenerDirective,
    SecondTestComponent,
    HostbindingDirective,
    ThirdTestComponent,
    StructuralDirectiveDirective,
    FourthTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
