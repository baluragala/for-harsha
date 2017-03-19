import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

    {{ 7 | powerof:2:10}}

    <p>Today piped, chained {{today | date:format | uppercase }}</p>


    <p *myUnless="condition">
        (A) This paragraph is displayed because the condition is false.
    </p>
      <h1 myHighlight>Course Manager</h1>
      <course-list></course-list>
  `,
})
export class AppComponent  { name = 'Angular'; condition=false; today=new Date()}
