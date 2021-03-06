import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/home']" [routerLinkActive]="['active']">Home</a></li>
                    <li><a [routerLink]="['/courses']"  [routerLinkActive]="['active']">Courses</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
  `,
})
export class AppComponent  { name = 'Angular'; condition=false; today=new Date()}
