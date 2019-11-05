import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective{

  constructor(private compon: ElementRef) {
  }

  @Input() appHover;

}
