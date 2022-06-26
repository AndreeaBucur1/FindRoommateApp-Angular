import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { PropertyPostsService } from '../shared/services/property-posts.service';
import { PropertyPostDTO } from '../shared/dtos/property-post.dto';
import { cities } from '../shared/constants/app.constants';

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
	public filtersActive: boolean = false;

	public isFormOpen: boolean = false;

	public isContactFormOpen: boolean = false;
	public ownerUsername: string = "";

	public cities = [...cities];
	
	public propertyTypes =  [
		{name: "All", code: "All"},
		{name: 'Apartments', code: 'Apartments'},
		{name: 'Houses', code: 'Houses'},

	];


	public propertyPosts: PropertyPostDTO[] = [];

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
						if (propertyPost.mainImage) {
							propertyPost.mainImage =  "data:image/png;base64," + propertyPost.mainImage;
						}
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
		this.ownerUsername = username;
		this.isContactFormOpen = true;
	}

	public closeContactForm(): void {
		this.isContactFormOpen = false;
	}

	public updateFiltersActive(): void {
		this.filtersActive = !this.filtersActive;
	}

}
