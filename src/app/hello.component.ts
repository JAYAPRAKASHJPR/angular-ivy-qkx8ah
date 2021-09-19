import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 appHighlight>Hello {{name}}!</h1>
  <input [(ngModel)] = "name" #nam appHighlight>
  <button (click) = "sum()"> Submit </button>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  @Output() eventEmitter = new EventEmitter();

  sum() {
    console.log(this.name);
    this.eventEmitter.emit(this.name);
  }
}
