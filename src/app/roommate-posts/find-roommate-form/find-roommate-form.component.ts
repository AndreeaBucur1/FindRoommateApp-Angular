import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { cities } from '../../shared/constants/app.constants';
import { RoommatePostDTO } from '../../shared/dtos/roommate-post.dto';
import { RoommatePostService } from '../../shared/services/roommate-post.service';

@Component({
	selector: 'app-find-roommate-form',
	templateUrl: './find-roommate-form.component.html',
	styleUrls: ['./find-roommate-form.component.css']
})
export class FindRoommateFormComponent implements OnInit {

	public form = this.formBuilder.group({
		isSmoker: false,
		acceptSmoker: false,
		roommateGenderPreference: "Any",
		hasAge: 15,
		roommateMinAgePreference: 15,
		roommateMaxAgePreference: 30,
		hasApartment: false,
		city: "",
		hasPets: false,
		acceptPets: false,
		isWorking: false,
		acceptNotWorking: false,
		isOrganized: false,
		acceptUnorganized: false,
		likesParties: false,
		acceptPartyingRoommate: false,
		isCommunicative: false,
		acceptUncommunicative: false,
		isPatient: false,
		acceptNotPatient: false,
		isFriendly: false,
		acceptNotFriendly: false,
		isResponsible: false,
		acceptNotResponsible: false,
		hasHomeParties: false,
		acceptHomeParties: false,
		hasGuests: false,
		acceptGuests: false,
		isLookingForAFriend: false,
		description: ""
	});

	public cities = [...cities];

	@Input()
	public isFormOpen: boolean = false;

	public isUserInfoVisible: boolean = true;
	
	public isRoommatePreferencesFormVisible: boolean = false;


	@Output()
	public closeFormEvent = new EventEmitter<void>();

	show() {
	}

	public getRoommateMinAgePreference(): AbstractControl | null {
		return this.form.get('roommateMinAgePreference')
	}

	public getRoommateMaxAgePreference(): AbstractControl | null {
		return this.form.get('roommateMaxAgePreference')
	}

	constructor(
		private formBuilder: FormBuilder,
		private roommatePostService: RoommatePostService
	) { 
		if(this.cities[0].name === "All"){
			this.cities.shift();
		}
	}

	ngOnInit(): void {
	}

	public handleSubmitForm(): void {
		const username: string | null = sessionStorage.getItem('username');
		if (username) {
			this.roommatePostService.createRoommatePost(username, this.form.value)
				.subscribe(
					(res) => {
						console.log(res);
						this.closeForm();
					},
					(err) => {
						console.log(err);					
					}
				)
		}
	}

	public openRoommatePreferencesForm(): void {
		this.isUserInfoVisible = false;
		this.isRoommatePreferencesFormVisible = true
	}

	public openUserInfoForm(): void {
		this.isUserInfoVisible = true;
		this.isRoommatePreferencesFormVisible = false
	}

	public closeForm(): void {
		console.log("closed");
		this.isFormOpen = false;
		this.isUserInfoVisible = false;
		this.isRoommatePreferencesFormVisible = false;
		this.closeFormEvent.emit();
	}

}
