import {NgModule} from '@angular/core';
import { HighlightDirective} from './highlight.directive'
import {UnlessDirective} from './unless.directive'
import { PowerOfPipe } from './powerof.pipe'

@NgModule({
    declarations:[HighlightDirective,UnlessDirective, PowerOfPipe],
    exports:[HighlightDirective, UnlessDirective, PowerOfPipe]
})
export class SharedModule{}