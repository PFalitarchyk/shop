import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  @Input('appDemo') appDemo: string;

  private hasBackground = false;

  constructor(public el: ElementRef, public render: Renderer2) { }

  @HostListener('click')
  onClick() {
    this.highlight(this.hasBackground ? (this.appDemo || 'lightgreen') :  null);
    this.hasBackground = !this.hasBackground;
  }

  private highlight(color: string) {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
