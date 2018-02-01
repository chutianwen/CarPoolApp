import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(namefield: any, query: any): any {
    //return null;
    if(query===undefined) return namefield;
    return namefield.filter(function(x){
      return x.name.toLowerCase().includes(query.toLowerCase());
    });
  }

}
