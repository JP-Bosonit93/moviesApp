import { Pipe, PipeTransform } from '@angular/core';
import { genre } from '../utils/file';

@Pipe({
  name: 'arrayToString',
})
export class ArrayToString implements PipeTransform {
  transform(value: string): string {
    // console.log(value);
    // console.log(genre);

    function convertToArray(str: string) {
      return str.split(',').map(Number).map(String);
    }

    const output = convertToArray(value); //

    let objects = [...genre];
    for (const iterator of objects) {
      // console.log(iterator.id)
      iterator.id.toString();
    }

    // console.log(objects);
    let arrayIds = [...value];

    let filteredObjects = objects.filter((obj) => {
      // console.log(obj);
      arrayIds.includes(obj.id.toString())

    }
    );

    // console.log(filteredObjects)

    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];

    // }
    // console.log(genre.filter(res => console.log(res)))

    return 'Science Fiction, Animation';
  }
}
