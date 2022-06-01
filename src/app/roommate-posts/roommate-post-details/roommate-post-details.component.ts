import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoommatePostDTO } from 'src/app/shared/dtos/roommate-post.dto';
import { UserDTO } from 'src/app/shared/dtos/user.dto';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
	selector: 'app-roommate-post-details',
	templateUrl: './roommate-post-details.component.html',
	styleUrls: ['./roommate-post-details.component.css']
})
export class RoommatePostDetailsComponent implements OnInit {

	public user: UserDTO = {};

	constructor(
		private activatedRoute: ActivatedRoute,
		private userService: UsersService,
		private router: Router
	) {
		this.activatedRoute.params.subscribe(
			(params) => {
				const username = params["username"];
				this.getUser(username);
			}
		)
	}

	private getUser(username: string): void {
		this.userService.getUser(username)
		.subscribe(
			(user) => {
				this.user = user;
				console.log(user);
				
			},
			(err) => {
				console.log(err);
				this.router.navigate(["", "/find-roommate"]);
			}
		)
	}

	ngOnInit(): void {
	}

}
