import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { RoommatePostDTO } from '../shared/dtos/roommate-post.dto';

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
	})

	public isUserInfoVisible: boolean = true;
	public isRoommatePreferencesFormVisible: boolean = false;

	show() {
		console.log(this.form.value);
	}

	public getRoommateMinAgePreference(): AbstractControl | null {
		return this.form.get('roommateMinAgePreference')
	}

	public getRoommateMaxAgePreference(): AbstractControl | null {
		return this.form.get('roommateMaxAgePreference')
	}

	constructor(
		private formBuilder: FormBuilder
	) { }

	ngOnInit(): void {
	}

	public handleSubmitForm(): void {

	}

	public openRoommatePreferencesForm(): void {
		console.log(this.form.value);
		this.isUserInfoVisible = false;
		this.isRoommatePreferencesFormVisible = true
	}

	public openUserInfoForm(): void {
		console.log(this.form.value);
		this.isUserInfoVisible = true;
		this.isRoommatePreferencesFormVisible = false
	}

}
