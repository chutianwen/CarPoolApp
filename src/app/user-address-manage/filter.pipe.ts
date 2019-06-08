import { Pipe, PipeTransform } from '@angular/core';
import {userActivity} from "./user-address-manage.component";

@Pipe({
  name: 'usernamefilter'
})
export class FilterPipe implements PipeTransform {

  transform(u: userActivity[], query: string): any[] {
    //return null;
    if(!u) return [];
    if(!query) return u;
    return u.filter(function(x){
      return x.userName.toLowerCase().includes(query.toLowerCase());
    });
  }
}
