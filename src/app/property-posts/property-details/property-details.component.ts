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

	public isOpenUploadFileDialog = false;

	public type: "sale" | "rent" = "sale";

	public src: string = "";

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
				if (propertyPost.mainImage) {
					this.src ="data:image/png;base64," + propertyPost.mainImage;
				}
				
			}
		)
  }

  public openFileUploadDialog() {
	  this.isOpenUploadFileDialog = true;
  }

  public uploadImage(event: any) {
		this.propertyPostsService.uploadMainImage(this.propertyPost!.id!, event)
			.subscribe(
				(res) => {
					this.getPropertyPost(this.propertyPost!.id!);
					this.isOpenUploadFileDialog = false;
					window.location.reload();
				}
			)
  }

}
