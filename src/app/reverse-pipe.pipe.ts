import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe'
})
export class ReversePipePipe implements PipeTransform {
names:string=""
  transform(value: any, ...args: unknown[]): unknown {
    this.names=value.split("").reverse().join("")
    return this.names;
  }

}
