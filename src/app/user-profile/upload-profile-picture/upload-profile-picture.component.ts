import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-upload-profile-picture',
  templateUrl: './upload-profile-picture.component.html',
  styleUrls: ['./upload-profile-picture.component.css']
})
export class UploadProfilePictureComponent implements OnInit {

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
