import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusBack]'
})
export class FocusBackDirective implements OnInit, OnDestroy {

  constructor() { }

  ngOnDestroy(): void {
    if (this.lastFocusedElement) {
      (this.lastFocusedElement as HTMLElement).focus();
    }
  }
  private lastFocusedElement: Element;
  ngOnInit(): void {
    this.lastFocusedElement = document.activeElement;
  }

}
