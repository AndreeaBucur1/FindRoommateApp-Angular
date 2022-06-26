import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyPostDTO } from '../dtos/property-post.dto';

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

	public createPost(propertyPost: PropertyPostDTO): Observable<PropertyPostDTO> {
		return this.http.post<PropertyPostDTO>(this.baseUrl, propertyPost, this.getOptions());
	}

	public getPostsByUsername(username: string): Observable<any[]> {
		return this.http.get<any[]>(`${this.baseUrl}/username/${username}`, this.getOptions());
	}

	public deleteById(id: number) {
		return this.http.delete(`${this.baseUrl}/${id}`, this.getOptions());
	}

	public uploadPhoto(id: number, imageFile: any) {
		const formData = new FormData();
		formData.append('imageFile', imageFile);
		return this.http.put(
			this.baseUrl + '/' + id + '/image',
			formData,
			{
				headers: {
					"Authorization": `Bearer ${sessionStorage.getItem('token')}`,
					'Access-Control-Allow-Origin': '*',
				}
			}
		)
	}

	public uploadMainImage(id: number, imageFile: any) {
		const formData = new FormData();
		formData.append('imageFile', imageFile);
		return this.http.put(
			this.baseUrl + '/' + id + '/main-image',
			formData,
			{
				headers: {
					"Authorization": `Bearer ${sessionStorage.getItem('token')}`,
					'Access-Control-Allow-Origin': '*',
				}
			}
		)
	}

}
