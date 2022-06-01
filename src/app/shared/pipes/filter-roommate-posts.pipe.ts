import { Pipe, PipeTransform } from '@angular/core';
import { RoommatePostDTO } from '../dtos/roommate-post.dto';

@Pipe({
  name: 'filterRoommatePosts'
})
export class FilterRoommatePostsPipe implements PipeTransform {

  transform(roommatePosts: RoommatePostDTO[], city: string, genderFilter: string, noPetsFilter: boolean, notSmokerFilter: boolean): RoommatePostDTO[] {
    if (city && city != "All") {
      roommatePosts = roommatePosts.filter(roommatePost => roommatePost.city?.includes(city));
    }
    if (genderFilter != "Any") {
      roommatePosts = roommatePosts.filter(roommatePost => roommatePost.hasGender?.toLowerCase() == genderFilter.toLowerCase());
    }
    if (notSmokerFilter === true) {
      roommatePosts = roommatePosts.filter(roommatePost => roommatePost.user?.roommatePost?.smoker == !notSmokerFilter);
    }
    if (noPetsFilter === true) {
      roommatePosts = roommatePosts.filter(roommatePost => roommatePost.hasPets == false);
    }    
    return roommatePosts;
  }


}
