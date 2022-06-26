import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../dtos/user.dto';

@Injectable({
	providedIn: 'root'
})

export class UsersService {

	public getOptions = () => {
		const token = sessionStorage.getItem("token");

		const options = {
			headers: {
				"Authorization": `Bearer ${token}`,
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
				'Content-Type': 'application/json'
			}
		}
		return options
	}

	public baseUrl = "http://localhost:8080/users";

	constructor(
		private httpClient: HttpClient
	) { }

	public getUsers(): Observable<UserDTO[]> {
		return this.httpClient.get<UserDTO[]>(this.baseUrl, this.getOptions());
	}

	public deleteById(id: number): Observable<any> {
		console.log(id);
		
		return this.httpClient.delete(`${this.baseUrl}/${id}`, this.getOptions());
	}

	public changeRole(userId: number, role: string): Observable<void> {
		return this.httpClient.post<any>(`${this.baseUrl}/change-role/${userId}`, [role], this.getOptions());
	}

	public getUser(username: string): Observable<UserDTO> {
		return this.httpClient.get<UserDTO>(`${this.baseUrl}/user/${username}`, this.getOptions());
	}

	public uploadProfilePhoto(id: number, imageFile: any) {
		const formData = new FormData();
		formData.append('imageFile', imageFile);
		return this.httpClient.put(
			this.baseUrl + '/' + id + '/image', 
			formData, 
			{
				headers: {
					"Authorization": `Bearer ${sessionStorage.getItem('token')}`,
					'Access-Control-Allow-Origin': '*',
				}
			}
		);
	}


	public userMapper(user: any): UserDTO {
		return {
			id: user.userId,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			username: user.username,
			profilePhoto: user.profilePhoto,
			role: user.role
		} as UserDTO;
	}

}
