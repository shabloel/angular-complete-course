import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-property-binding-child',
  templateUrl: './custom-property-binding-child.component.html',
})
export class CustomPropertyBindingChildComponent implements OnInit {

  @Input() childProperty!: string;

  @Output() childOutput: any = new EventEmitter<string>();

  hello: string = "hello";

  constructor() { }

  ngOnInit(): void {
  }
  

  childEventEmitter() {
    console.log(" hello");
    this.childOutput.emit(this.hello);
  }

}
