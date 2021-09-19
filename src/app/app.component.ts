import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  class1 = 'c1';
  class2 = 'c2';
  class3 = 'c3';
  flag: boolean = true;
  date = new Date(2020, 10, 10);
  parent_val:string;
  getValue(event) {
    console.log(this.parent_val);
  }
}
