import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mymul'
})
export class MymulPipe implements PipeTransform {

  transform(value: number, input:number): number {
    return value*input;
  }

}
