import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { PropertyPostsService } from './property-posts.service';
import { PropertyPost } from './property.post';

@Component({
	selector: 'app-property-posts',
	templateUrl: './property-posts.component.html',
	styleUrls: ['./property-posts.component.css']
})
export class PropertyPostsComponent implements OnInit {

	@Input()
	public type: string = "";

	public cityFilter: string = "";
	public numberOfRoomsFilter: number = 0;
	public numberOfBathroomsFilter: number = 0;
	public minSurfaceFilter: number = 0;
	public minYearFilter?: number;
	public hasElevatorFilter?: boolean;
	public hasParkingSpotFilter?: boolean;
	public propertyTypeFilter: "Apartment" | "House" | "" = "";
	public maxPriceFilter?: number;

	public cities =  [
		{name: "All", code: "All"},
		{name: 'New York', code: 'NY'},
		{name: 'Rome', code: 'RM'},
		{name: 'London', code: 'LDN'},
		{name: 'Istanbul', code: 'IST'},
		{name: 'Paris', code: 'PRS'}
	];


	public propertyPosts: PropertyPost[] = [];

	constructor(
		private propertyPostsService: PropertyPostsService,
		private location: Location,
		private userService: UsersService
	) { }

	public ngOnInit(): void {
		this.type = this.location.path().substring(1);
		this.getPropertyPosts();
	}

	public getPropertyPosts() {
		this.propertyPostsService.getPosts(this.type)
			.subscribe(
				(res) => {
					this.propertyPosts = res;
					console.log(this.propertyPosts);

					for (let propertyPost of this.propertyPosts) {
						propertyPost.user = this.userService.userMapper(propertyPost.user);
						propertyPost.creationDate = propertyPost.creationDate?.toLocaleString().substring(0,10);
					}
					console.log(this.propertyPosts);

				},
				(err) => {
					console.log(err);
				}
			)
	}

}
