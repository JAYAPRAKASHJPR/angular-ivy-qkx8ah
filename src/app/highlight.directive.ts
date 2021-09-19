import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() color: string;
  constructor(public el: ElementRef) {
    el.nativeElement.style.color = 'yellow';
    console.log(el);
  }
  @HostListener('click') function() {
    console.log(this.color);

    this.el.nativeElement.style.color = this.color;
  }
  @HostBinding('style.backgroundColor') backgroundColor = 'red';

  ngAfterViewChecked() {
    if (this.color == undefined) {
      this.color = 'pink';
    }
  }
}
