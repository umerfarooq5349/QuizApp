import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangebg]'
})
export class ChangebgDirective {

  constructor(private el: ElementRef, private Rendere: Renderer2) { }

  @Input() isCorrect: boolean = false;


  @HostListener('click') answer() {

    if (this.isCorrect) {
      this.Rendere.setStyle(this.el.nativeElement, 'background', 'green');
      this.Rendere.setStyle(this.el.nativeElement, 'color', 'white')

      this.Rendere.setStyle(this.el.nativeElement, 'border', '2px solid #28282b')
    }
    else {
      this.Rendere.setStyle(this.el.nativeElement, 'background', 'red');
      this.Rendere.setStyle(this.el.nativeElement, 'color', 'white')

      this.Rendere.setStyle(this.el.nativeElement, 'border', '2px solid #28282b')
    }
  }

}
