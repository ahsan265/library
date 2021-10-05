import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showexpansionaccount'
})
export class ShowexpansionaccountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
  // showexpansion(val:any){
  //   if(val==true)
  //   {
  //     return true;
  //   }
  //   else if(val==false)
  //   {
  //     return false;

  //   }
  // }

}
