import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-attribute-directive',
  templateUrl: './simple-attribute-directive.component.html',
  styleUrls: ['./simple-attribute-directive.component.css']
})
export class SimpleAttributeDirectiveComponent implements OnInit {

  onOff: boolean = false;
  textColor: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  switchOnBackgroundColor()
 {
    this.onOff = !this.onOff;
  }

  switchTextColor() {
    this.textColor = !this.textColor;
  }

}
