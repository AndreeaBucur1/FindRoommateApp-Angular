import { Component, OnInit } from '@angular/core';
import { cities } from '../shared/constants/app.constants';
import { MatchingScoreDTO } from '../shared/dtos/matching-score.dto';
import { RoommatePostDTO } from '../shared/dtos/roommate-post.dto';
import { UserDTO } from '../shared/dtos/user.dto';
import { RoommatePostService } from '../shared/services/roommate-post.service';
import { UsersService } from '../shared/services/users.service';

@Component({
	selector: 'app-roommate-posts',
	templateUrl: './roommate-posts.component.html',
	styleUrls: ['./roommate-posts.component.css']
})
export class RoommatePostsComponent implements OnInit {

	public roommatePosts: RoommatePostDTO[] = [];

	public matchingScoreDTOs: MatchingScoreDTO[] = [];

	public currentUser: UserDTO = {};

	public isOpenForm: boolean = false;

	public isOrderedByMatching = false;

	public cityFilter: string = "";
	public genderFilter: "Any" | "Female" | "Male" = "Any";
	public notSmokerFilter: boolean = false;
	public noPetsFilter: boolean = false;
	public filtersActive: boolean = false;

	public cities = [...cities];

	public genders = [
		{name: "Any", code: "Any"},
		{name: 'Female', code: 'Female'},
		{name: 'Male', code: 'Male'},

	]

	constructor(
		private roommatePostService: RoommatePostService,
		private userService: UsersService
	) {
		this.getCurrentUser();
	 }

	ngOnInit(): void {
		this.getRoommatePosts();
	}

	public getRoommatePosts(): void {
		this.roommatePostService.getRoommatePosts()
		.subscribe(
			(res) => {
					this.isOrderedByMatching = false;
					this.matchingScoreDTOs = [];
					this.roommatePosts = res;	
					console.log(this.roommatePosts);
					for (let roommatePost of this.roommatePosts) {
						if (roommatePost.user!.profilePhoto) {
							roommatePost.user!.profilePhoto = "data:image/png;base64," + roommatePost.user!.profilePhoto;
						}
					}
					
				},
				(err) => {
					console.log(err);
				}
			)
	}

	public getCurrentUser(): void {
		this.userService.getUser(sessionStorage.getItem("username")!)
			.subscribe(
				(res) => {
					this.currentUser = res;					
				}
			)
	}

	public orderByMatching(): void {
		this.roommatePostService.getRoommatePostsOrderByMatching(this.currentUser.username!)
			.subscribe(
				(res) => {
					this.matchingScoreDTOs = res;
					this.isOrderedByMatching = true;
					this.roommatePosts = [];
					for (let matchingScoreDTO of this.matchingScoreDTOs) {
						let roommatePost = matchingScoreDTO.roommatePostDTO;
						roommatePost.score = matchingScoreDTO.score;
						this.roommatePosts.push(roommatePost);
						if (roommatePost.user!.profilePhoto) {
							roommatePost.user!.profilePhoto = "data:image/png;base64," + roommatePost.user!.profilePhoto;
						}
					}					
				},
				(err) => {
					console.log(err);					
				}
			)
	}

	public openForm(): void {
		console.log(this.isOpenForm);
		
		this.isOpenForm = true;
	}

	public closeForm(): void {
		this.isOpenForm = false;
		this.getRoommatePosts();
	}

	public updateFiltersActive(): void {
		this.filtersActive = !this.filtersActive;
	}

}
