import {Directive, ElementRef, Input} from '@angular/core';

@Directive({selector: '[myHighlight]'})
export class HighlightDirective{
    constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'Green';
    console.log(el)
  }
}