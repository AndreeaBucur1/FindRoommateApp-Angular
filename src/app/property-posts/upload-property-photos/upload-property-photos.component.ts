import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-property-photos',
  templateUrl: './upload-property-photos.component.html',
  styleUrls: ['./upload-property-photos.component.css']
})
export class UploadPropertyPhotosComponent implements OnInit {

  public photo: any;

  @Output()
  public onUploadImage = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public setImage(event: any): void{
    console.log(event.target.files[0]);
    this.photo = event.target.files[0];

  }

  public uploadPhoto() {
    this.onUploadImage.emit(this.photo);
  }

}
