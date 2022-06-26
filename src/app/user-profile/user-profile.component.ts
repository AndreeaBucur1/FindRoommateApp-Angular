import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { UserDTO } from '../shared/dtos/user.dto';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

	public user: UserDTO = new UserDTO();

	public src: any;

	public isOpenPhotoUploadDialog: boolean = false;
	constructor(
		private userService: UsersService,
		private sanitizer: DomSanitizer
	) { }

	ngOnInit(): void {
		const username = sessionStorage.getItem("username");
		if (username) {
			this.userService.getUser(username!)
				.subscribe(
					(res) => {
						this.user = res;
						console.log(res.profilePhoto);
						this.src ="data:image/png;base64," + res.profilePhoto;
					}
				)
		}

	}

	public openFileUploadDialog(): void {
		this.isOpenPhotoUploadDialog = true;
	}

	public uploadImage(event: any) {
		console.log(event);

		this.userService.uploadProfilePhoto(this.user.userId!, event)
			.subscribe(
				(res) => {
					const username = sessionStorage.getItem("username");
					if (username) {
						this.userService.getUser(username!)
							.subscribe(
								(res) => {
									this.user = res;
									console.log(res.profilePhoto);
									this.src ="data:image/png;base64," + res.profilePhoto;
									this.isOpenPhotoUploadDialog = false;
								}
							)
					}
				}
			)
	}

}
