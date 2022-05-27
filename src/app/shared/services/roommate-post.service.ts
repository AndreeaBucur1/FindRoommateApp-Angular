import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoommatePostDTO } from '../dtos/roommate-post.dto';

@Injectable({
	providedIn: 'root'
})
export class RoommatePostService {

	public baseUrl = "http://localhost:8080/find-roommate";

	constructor(
		private readonly http: HttpClient
	) { }

	public createRoommatePost(username: string, roommatePost: RoommatePostDTO): Observable<RoommatePostDTO> {
		return this.http.post<RoommatePostDTO>(`${this.baseUrl}/${username}`, roommatePost, this.getOptions());
	}

	public getRoommatePosts(): Observable<RoommatePostDTO[]> {
		return this.http.get<RoommatePostDTO[]>(this.baseUrl, this.getOptions());
	}

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
		return options;
	}

}
