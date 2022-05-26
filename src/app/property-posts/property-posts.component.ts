import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

	public isFormOpen: boolean = false;

	public isContactFormOpen: boolean = false;
	public ownerUsername: string = "";

	public cities =  [
		{name: "All", code: "All"},
		{name: 'New York', code: 'New York'},
		{name: 'Rome', code: 'Rome'},
		{name: 'London', code: 'London'},
		{name: 'Istanbul', code: 'Istanbul'},
		{name: 'Paris', code: 'Paris'}
	];

	
	public propertyTypes =  [
		{name: "All", code: "All"},
		{name: 'Apartments', code: 'Apartments'},
		{name: 'Houses', code: 'Houses'},

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
					for (let propertyPost of this.propertyPosts) {
						propertyPost.user = this.userService.userMapper(propertyPost.user);
						propertyPost.creationDate = propertyPost.creationDate?.toLocaleString().substring(0,10);
					}
				},
				(err) => {
					console.log(err);
				}
			)
	}

	public openForm(): void {
		this.isFormOpen = true;
	}
	
	public closeForm(): void {
		this.isFormOpen = false;		
	}

	public openContactForm(username: string): void {
		console.log(username);
		this.ownerUsername = username;
		this.isContactFormOpen = true;
	}

	public closeContactForm(): void {
		this.isContactFormOpen = false;
	}

}
