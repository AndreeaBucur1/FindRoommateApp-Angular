import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { PropertyPostsService } from '../../shared/services/property-posts.service';
import { PropertyPostDTO } from '../../shared/dtos/property-post.dto';

@Component({
	selector: 'app-users-properties',
	templateUrl: './users-properties.component.html',
	styleUrls: ['./users-properties.component.css']
})
export class UsersPropertiesComponent implements OnInit {

	public propertyPosts: PropertyPostDTO[] = [];

	constructor(
		private propertyPostsService: PropertyPostsService,
		private userService: UsersService
	) { }

	public ngOnInit(): void {
		this.getPropertyPosts();
	}

	public getPropertyPosts(): void {
		const username: string = sessionStorage.getItem("username")!;
		this.propertyPostsService.getPostsByUsername(username!)
			.subscribe(
				(res) => {
					this.propertyPosts = res;
					for (let propertyPost of this.propertyPosts) {
						propertyPost.user = this.userService.userMapper(propertyPost.user);
						propertyPost.creationDate = propertyPost.creationDate?.toLocaleString().substring(0, 10);
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

	public deleteById(id: number) {
		return this.propertyPostsService.deleteById(id)
			.subscribe(
				(res) => {
					this.getPropertyPosts();				
				}
			)
	}

}
