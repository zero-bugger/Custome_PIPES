import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paramcheck'
})
export class ParamcheckPipe implements PipeTransform {

  transform(value: number, param: string): string  {
    let result:string =""

    if(param === "Even"){
      if(value%2 === 0){
          result=result+"Number is Even Number";    
      }
      else{
        result=result+"Number is not Even Number";
      }

    }

    if (param === "Odd"){
      if(value %2 != 0 ){
        result=result+"Number is Odd number";
      }
      else{
        result=result+"Number is not Odd number"
      }
     
    }
    if (param === "Prime"){
      for (let i=2 ;i <value/2;i++){
        if(value%i===0){
          result=result+"Number is Prime number";
        }
        else {
          result=result="Number is not Prime number";
        }
      }
   
    }

    if(param === "Perfect"){
      let sum=0;
      for (let i =1 ;i<value;i++){
        if(value%i==0){
          sum=sum + i;
        }
      }
      if( sum === value){
        return result=result+"Number is Perfect Number";
      }
      else {
        return result=result+"Number is not Perfect Number";
      }
    
    }
    return result
  }

}
