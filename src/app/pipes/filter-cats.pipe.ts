import { Pipe, PipeTransform } from '@angular/core';
import { isBlank } from '@angular/core/src/facade/lang';


@Pipe({
  name: 'sortCats',
  pure: false
})

export class FilterOwnersAndAnimalsPipe implements PipeTransform {
  transform(array: Array<string>, sortOrder: string): Array<string> {
  
    array.sort();
    if (sortOrder === 'desc') {
        array.reverse();    
    }

    return array; 

  }
}

