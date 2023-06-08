import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  //Bind properties
  @HostBinding('class.boxShadow') isHover: boolean = false;

  //listen to events
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.isHover = true;
  }
  @HostListener('mouseleave') mouseOut(eventData: Event) {
    this.isHover = false;
  }
  constructor() {}
}
