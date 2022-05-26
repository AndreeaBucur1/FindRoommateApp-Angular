import { Pipe, PipeTransform } from '@angular/core';
import { min } from 'rxjs';
import { PropertyPost } from 'src/app/property-posts/property.post';

@Pipe({
  name: 'filterPropertyPosts'
})
export class FilterPropertyPostsPipe implements PipeTransform {

  transform(propertyPosts: PropertyPost[], city: string, numberOfRooms: number, numberOfBathrooms: number, minSurface: number, minYear: number | undefined, hasElevator: boolean | undefined, hasParkingSpot: boolean | undefined, propertyType: "Apartment" | "House" | "", maxPrice: number | undefined): PropertyPost[] {
    
    if (city && city != "All") {
        propertyPosts = propertyPosts.filter( propertyPost => propertyPost.city?.includes(city));
    }
    if (numberOfRooms > 0) {
      propertyPosts = propertyPosts.filter( propertyPost => propertyPost.numberOfRooms === numberOfRooms);
    }
    if (numberOfBathrooms > 0) {
      propertyPosts = propertyPosts.filter(propertyPost => propertyPost.numberOfBathrooms === numberOfBathrooms);
    }
    if (minSurface > 0) {
      propertyPosts = propertyPosts.filter(propertyPost => propertyPost.surface >= minSurface)
    }
    if (minYear != undefined ) {
      propertyPosts = propertyPosts.filter(propertyPost => propertyPost.buildYear >= minYear);
    }
    if (hasParkingSpot !== undefined && hasParkingSpot) {
      propertyPosts = propertyPosts.filter(propertyPost => propertyPost.hasParkingSpot === hasParkingSpot);
    }
    if (hasElevator !== undefined && hasElevator) {
      propertyPosts = propertyPosts.filter(propertyPost => propertyPost.hasElevator === hasElevator);
    }
    if (propertyType) {
      propertyPosts = propertyPosts.filter(propertyPost => propertyPost.propertyType === propertyType);
    }
    if (maxPrice) {
      propertyPosts = propertyPosts.filter(propertyPost => propertyPost.price <= maxPrice);
    }
    return propertyPosts;
  }

}
