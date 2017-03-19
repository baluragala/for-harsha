import { Component } from '@angular/core'

@Component({
  selector:'hello-angular2',
  templateUrl:'app/home.component.html',
  styles:['h1 { color:green }']
})
export class HomeComponent{
  name=["baluragala",'Zeoleanr'];
  address={
    street:'John road',
    state:'Alabama'
  }

  printAddress(){
    return this.address.street + " , " + this.address.state
  }
}

