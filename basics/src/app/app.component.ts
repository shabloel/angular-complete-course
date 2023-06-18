import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
  color = 'blue';

  fromChild!: string;
  fromChildTwo!: string;

  setFirstParentVariable(input: any) {
    this.fromChild = input;
  }
  setSecondParentVariable(input: any) {
    console.log("input" + input);
    this.fromChildTwo = input;
  }

}
