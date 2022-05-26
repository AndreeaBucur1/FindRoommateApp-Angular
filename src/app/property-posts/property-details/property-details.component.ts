import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyPostDTO } from '../../shared/dtos/property-post.dto';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  public propertyPost?: PropertyPostDTO;

  constructor(
    private readonly activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(
      (params) => {
        const id = params["id"];        
      }
    )
   }

  ngOnInit(): void {

  }

}
