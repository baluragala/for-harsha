import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'powerof'
})
export class PowerOfPipe implements PipeTransform{
 transform(value: number, toPower: string, multiply:number ): number {
    let exp = parseFloat(toPower);
    return ( Math.pow(value, isNaN(exp) ? 1 : exp)) * multiply;
  }
}

