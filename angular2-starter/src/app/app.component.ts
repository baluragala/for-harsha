import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>Hello {{name}}</h1><p>This is extra</p>',
})
export class AppComponent  { name = 'Angular'; }
