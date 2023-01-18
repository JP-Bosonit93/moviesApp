import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutterRef'
})

export class CutterRefPipe implements PipeTransform {

  transform(value:string): string {
    return value.slice(0,24);
  }

}
