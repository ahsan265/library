import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Getfirst_letter_name'
})
export class CreatefirstletterPipe implements PipeTransform {

  transform(value: any) {
    return this.Getfirst_letter_name(value);
  }
  Getfirst_letter_name(val:any)
  {
    return( val.charAt(val).toUpperCase());
  }
 
}
