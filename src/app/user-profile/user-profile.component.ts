import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { UsersService } from '../shared/services/users.service';
import { UserDTO } from '../shared/user.dto';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public user: UserDTO = new UserDTO();

  public isOpenPhotoUploadDialog: boolean = false;
  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    const username = sessionStorage.getItem("username");
    if (username) {
      this.userService.getUser(username!)
        .subscribe(
          (res) => {
            this.user = res;
          }
        )
    }

  }

  public openFileUploadDialog(): void {
    this.isOpenPhotoUploadDialog = true;
  }

  public uploadImage(event: any) {
     this.userService.uploadProfilePhoto(this.user.userId!, event)
      .subscribe(
        (res) => {
          console.log(res);
          
        }
      )
  }

}
