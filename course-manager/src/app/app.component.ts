import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

    <rf></rf>
  `,
})
export class AppComponent  { name = 'Angular'; condition=false; today=new Date()}
