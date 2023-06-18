import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  text: string = 'default text';

  // //the old way
  // keyup(value: any) {
  //   this.text = value;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
