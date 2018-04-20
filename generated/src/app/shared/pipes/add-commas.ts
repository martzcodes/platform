import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addCommas'
})
export class AddCommasPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
