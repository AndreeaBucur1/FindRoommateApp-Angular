import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyPostsService } from 'src/app/shared/services/property-posts.service';
import { PropertyPostDTO } from '../../shared/dtos/property-post.dto';

@Component({
	selector: 'app-property-details',
	templateUrl: './property-details.component.html',
	styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

	public propertyPost?: PropertyPostDTO;

	public type: "sale" | "rent" = "sale";

	constructor(
		private propertyPostsService: PropertyPostsService,
		private readonly activatedRoute: ActivatedRoute,
	) {
		this.activatedRoute.params.subscribe(
			(params) => {
				const id = params["id"];
				this.getPropertyPost(id);
			}
		)
	}

	ngOnInit(): void {
	}

	private getPropertyPost(id: number): void {
		this.propertyPostsService.getPostById(id)
		.subscribe(
			(propertyPost) => {
				if (!propertyPost.isForSale) {
					this.type = "rent";
				}
				propertyPost.creationDate = propertyPost.creationDate?.toLocaleString().substring(0,10);
				this.propertyPost = propertyPost;
				console.log(this.propertyPost);
				
			}
		)
  }

}
