import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showemailorphone'
})
export class ShowemailorphonePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var arg1 = args[0];
    var arg2 = args[1];
    var arg3 = args[2];
    return this.show_email_phone(arg1,arg2,arg3);
  }
  show_email_phone(val:any,email:any,phone:any)
  {
    if(val==true)
    {
      return email;
    }
    else if(val==false)
    {
      return phone;
    }
  }
}
