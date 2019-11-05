import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective{

  constructor(private component: ElementRef ) {
  }

  @Input() appHover;
  @HostListener('mousemove') coloriser(){
    this.component.nativeElement.style.backgroundColor = 'lightgoldenrodyellow'
  }

}
