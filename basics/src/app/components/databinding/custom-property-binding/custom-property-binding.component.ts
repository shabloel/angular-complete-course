import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-property-binding',
  templateUrl: './custom-property-binding.component.html',
  styleUrls: ['./custom-property-binding.component.css']
})
export class CustomPropertyBindingComponent implements OnInit {

  parentVariable: string = "parent variable";

  variableSetByChild!: string;

  constructor() { }

  ngOnInit(): void {
  }

  processChildVariable(childInput: any) {
    console.log(" input : " + childInput);
    this.variableSetByChild = childInput;
  }

}
