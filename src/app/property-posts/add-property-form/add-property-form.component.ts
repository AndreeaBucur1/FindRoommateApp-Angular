import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { UserDTO } from 'src/app/shared/dtos/user.dto';
import { PropertyPostsService } from '../property-posts.service';
import { PropertyPostDTO } from '../../shared/dtos/property-post.dto';

@Component({
	selector: 'app-add-property-form',
	templateUrl: './add-property-form.component.html',
	styleUrls: ['./add-property-form.component.css']
})
export class AddPropertyFormComponent implements OnInit {

	public propertyTypes = [
		{ name: "Apartment", code: "A" },
		{ name: 'House', code: 'H' },
	]

	@Input()
	public isFormOpen: boolean = false;

	public cities = [
		{ name: 'New York', code: 'NY' },
		{ name: 'Rome', code: 'RM' },
		{ name: 'London', code: 'LDN' },
		{ name: 'Istanbul', code: 'IST' },
		{ name: 'Paris', code: 'PRS' }
	];

	public form: FormGroup = this.formBuilder.group({
		"title": ["", [Validators.required, Validators.minLength(10)]],
		"propertyType": ["Apartment", [Validators.required,]],
		"isForSale": true,
		"numberOfRooms": 1,
		"numberOfBathrooms": 1,
		"floor": 0,
		"city": ["", [Validators.required, Validators.minLength(2)]],
		"surface": 0,
		"hasParkingSpot": false,
		"hasElevator": false,
		"buildYear": 1940,
		"price": [0, Validators.required],
		"description": [0, [Validators.required, Validators.minLength(10)]],
	})

	@Output()
	public closeFormEvent = new EventEmitter<void>();

	@Output()
	public reloadPostsEvent = new EventEmitter<void>();

	public get titleFormControl(): AbstractControl | null {
		return this.form.get('title');
	}

	public get propertyTypeFormControl(): AbstractControl | null {
		return this.form.get('propertyType');
	}

	public get isForSaleFormControl(): AbstractControl | null {
		return this.form.get('isForSale');
	}

	public get numberOfRoomsFormControl(): AbstractControl | null {
		return this.form.get('numberOfRooms');
	}

	public get numberOfBathroomsFormControl(): AbstractControl | null {
		return this.form.get('numberOfBathrooms');
	}

	public get floorFormControl(): AbstractControl | null {
		return this.form.get('floor');
	}

	public get cityFormControl(): AbstractControl | null {
		return this.form.get('city');
	}

	public get surfaceFormControl(): AbstractControl | null {
		return this.form.get('surface');
	}

	public get hasElevatorFormControl(): AbstractControl | null {
		return this.form.get('hasElevator');
	}

	public get hasParkingSpotFormControl(): AbstractControl | null {
		return this.form.get('hasParkingSpot');
	}

	public get priceFormControl(): AbstractControl | null {
		return this.form.get('price');
	}

	public get buildYearFormControl(): AbstractControl | null {
		return this.form.get('buildYear');
	}

	public get descriptionFormControl(): AbstractControl | null {
		return this.form.get('description');
	}

	constructor(
		private formBuilder: FormBuilder,
		private propertyPostsService: PropertyPostsService,
		private userService: UsersService
	) { }

	ngOnInit(): void {
	}

	public handleSubmitForm(): void {
		let propertyPost: PropertyPostDTO = this.form.value;
		const username = sessionStorage.getItem("username"); let user: UserDTO = {};
		if (username) {
			this.userService.getUser(username!)
				.subscribe(
					(res: UserDTO) => {
						propertyPost.user = {
							userId: res.userId
						}
						this.propertyPostsService.createPost(propertyPost)
							.subscribe(
								(res) => {
									this.closeFormEvent.emit();
									this.reloadPostsEvent.emit();
								},
								(err) => {
									console.log(err);

								}
							)
					}
				)
		}
	}

	public closeForm() {
		this.isFormOpen = false;
		this.closeFormEvent.emit();
	}

}
