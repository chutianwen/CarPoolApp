import { Pipe, PipeTransform } from '@angular/core';
import {userActivity} from "./user-address-manage.component";

@Pipe({
  name: 'usernameFilter'
})

export class FilterPipe implements PipeTransform {

  transform(userActivities: userActivity[], searchText: string): any[] {
    if(!userActivities) return [];
    if(!searchText) return userActivities;
    searchText = searchText.toLowerCase();
    return userActivities.filter( userActivity => {
      return userActivity.userName.toLowerCase().includes(searchText);
    });
  }

}
