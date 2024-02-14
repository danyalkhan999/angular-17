import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true
})
export class HighlightedDirective {
  @Input('highlighted') isHighlighted:any = false;

  constructor( eleRef : ElementRef) { 
  }


  @HostBinding('class.highlighted')
  get cssClasses(){
    return this.isHighlighted;
  }

  @HostListener('mouseover')
  mouseOver(){
    this.isHighlighted = true;
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.isHighlighted = false;
  }

}
