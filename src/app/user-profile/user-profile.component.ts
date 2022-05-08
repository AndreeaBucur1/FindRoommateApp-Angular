import { Component, OnInit } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { UsersService } from '../shared/services/users.service';
import { User } from '../shared/user.entity';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public user: User = new User();

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
            console.log(this.user);
          }
        )
    }

  }

  public openFileUploadDialog(): void {
    this.isOpenPhotoUploadDialog = true;
  }

  public uploadImage(event: any) {
     this.userService.uploadProfilePhoto(this.user.id!, event)
      .subscribe(
        (res) => {
          console.log(res);
          
        }
      )
  }

}
