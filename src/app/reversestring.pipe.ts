import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversestring'
})
export class ReversestringPipe implements PipeTransform {
  
  transform(value: string): string {
    let result :string ="";
    let n=value.length-1;

    for(let i=n;i>=0;i--){
      result=result+value.charAt(i);
    }
    
    return result;
  }

}
