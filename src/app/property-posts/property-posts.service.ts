import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyPost } from './property.post';

@Injectable({
	providedIn: 'root'
})


export class PropertyPostsService {

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

	public baseUrl = "http://localhost:8080/property-posts";

	constructor(
		private readonly http: HttpClient
	) { }

	public getPosts(type: string): Observable<any[]> {
		return this.http.get<any[]>(`${this.baseUrl}/${type}`, this.getOptions());
	}

	public getPostById(id: number): Observable<any> {
		return this.http.get<any>(`${this.baseUrl}/${id}`, this.getOptions());
	}

}
