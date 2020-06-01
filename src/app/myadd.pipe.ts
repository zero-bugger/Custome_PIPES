import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myadd'
})
export class MyaddPipe implements PipeTransform {

  transform(value: number, input:number): number {

        

    return value+input;


  }

}
