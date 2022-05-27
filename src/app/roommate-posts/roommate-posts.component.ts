import { Component, OnInit } from '@angular/core';
import { RoommatePostDTO } from '../shared/dtos/roommate-post.dto';
import { RoommatePostService } from '../shared/services/roommate-post.service';

@Component({
	selector: 'app-roommate-posts',
	templateUrl: './roommate-posts.component.html',
	styleUrls: ['./roommate-posts.component.css']
})
export class RoommatePostsComponent implements OnInit {

	public roommatePosts: RoommatePostDTO[] = [];

	constructor(
		private roommatePostService: RoommatePostService
	) { }

	ngOnInit(): void {
		this.getRoommatePosts();
	}

	public getRoommatePosts(): void {
		this.roommatePostService.getRoommatePosts()
			.subscribe(
				(res) => {
					this.roommatePosts = res;
					console.log(this.roommatePosts);
				},
				(err) => {
					console.log(err);
				}
			)
	}

}
