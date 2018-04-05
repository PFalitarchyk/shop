import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(array: any, orderBy: string, asc: boolean = false): any {
    if (!orderBy || orderBy.trim() === '') {
      return array;
    }

    if (asc) {
      return Array.from(array).sort((item1: any, item2: any) => {
        return this.comparator(item1[orderBy], item2[orderBy]);
      });
    } else {
      return Array.from(array).sort((item1: any, item2: any) => {
        return this.comparator(item2[orderBy], item1[orderBy]);
      });
    }
  }

  private comparator(a: any, b: any): number {
    if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
      if (a.toLowerCase() < b.toLowerCase()) {return -1; }
      if (a.toLowerCase() > b.toLowerCase()) {return 1; }
    } else {
      if (parseFloat(a) < parseFloat(b)) {return -1; }
      if (parseFloat(a) > parseFloat(b)) {return 1; }
     }

    return 0;
  }
}
