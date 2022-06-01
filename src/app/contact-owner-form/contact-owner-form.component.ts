import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { UserDTO } from '../shared/dtos/user.dto';

@Component({
	selector: 'app-contact-owner-form',
	templateUrl: './contact-owner-form.component.html',
	styleUrls: ['./contact-owner-form.component.css']
})
export class ContactOwnerFormComponent implements OnInit {

	@Input()
	public username: string = "";

	@Input()
	public isContactFormOpen: boolean = false;

	@Output()
	public closeContactFormEvent = new EventEmitter<void>();

	public owner: UserDTO = {};

	constructor(
		private userService: UsersService
	) { }

	ngOnInit(): void {
		this.findOwner();
	}

	public findOwner(): void {
		if (this.username) {
			this.userService.getUser(this.username)
				.subscribe(
					(user) => {
						this.owner = user;			
					}
				)
		}
	}

	public closeForm(): void {
		this.isContactFormOpen = false;
		this.closeContactFormEvent.emit();
	}




}
