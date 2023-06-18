import { VariableBinding } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-local-references',
  templateUrl: './local-references.component.html',
  styleUrls: ['./local-references.component.css']
})
export class LocalReferencesComponent implements OnInit {

  @Output() firstEventEmitter: any = new EventEmitter<string>();
  @Output() secondEventEmitter: any = new EventEmitter<string>();

  @ViewChild('secondInputField') variableSecondChild!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addInput(input: HTMLInputElement) {
    this.firstEventEmitter.emit(input.value);
  }

  addSecondInput() {
    console.log("var: " + this.variableSecondChild.nativeElement.value);
    this.secondEventEmitter.emit(this.variableSecondChild.nativeElement.value);
  }

}
