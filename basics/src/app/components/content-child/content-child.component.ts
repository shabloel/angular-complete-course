import { AfterContentChecked, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit, AfterContentChecked {

  @ContentChild('contentOfParagraph') contentFromParagraph!: ElementRef;

  paragraphFromParent!: string

  constructor() { }
  
  ngAfterContentChecked(): void {
    this.paragraphFromParent = this.contentFromParagraph.nativeElement.textContent;

    console.log(" what? :" + this.paragraphFromParent);
    
  }

  ngOnInit(): void {
  }



}
