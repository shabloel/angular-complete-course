import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-test',
  templateUrl: './third-test.component.html',
  styleUrls: ['./third-test.component.css']
})
export class ThirdTestComponent implements OnInit {

  color: string = 'blue';
  size: string = '10px';

  constructor() { }

  ngOnInit(): void {
  }

}
