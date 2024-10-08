import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../shared/dtos/user.dto';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {

  public users: UserDTO[] = [];

  public columns: any[] = [];

  public roles: string[] = ["user", "admin"];

  public isOpenChangeRoleDialog: boolean = false;

  public userToEdit: {userId: number, role: string} = {userId: 0 , role: ""};
  
  public role: string = "";

  constructor(
    private userService: UsersService
  ) {
    this.getUsers();

  }

  ngOnInit(): void {
    this.columns = [
      { field: 'firstName', header: 'First name' },
      { field: 'lastName', header: 'Last name' },
      { field: 'username', header: 'Username' },
      { field: 'email', header: 'Email' },
      { fileId: 'role', header: 'Role' },
      { field: 'actions', header: 'Actions' },
    ]
  }

  public getUsers(): void {
    this.userService.getUsers()
      .subscribe(
        (users: UserDTO[]) => {
          this.users = users;
          console.log(users);
          
        }
      )
  }

  public deleteById(id: number): void {
    console.log(id);
    
    this.userService.deleteById(id)
      .subscribe(
        () => {
          this.getUsers();
        },
        (error) => {
          console.log(error);
          
        }
      )
  }

  public handleChangeRole() {
    this.userToEdit.role = this.role;
    this.userService.changeRole(this.userToEdit.userId, this.userToEdit.role)
      .subscribe(
        (res) => {
          this.isOpenChangeRoleDialog = false;
          this.getUsers();
        },
        (err) => {
          console.log(err);
        }
      )
    
  }

  public openChangeRoleDialog(id: number, role: string): void {
    this.role = role;
    this.userToEdit.userId = id;
    this.userToEdit.role = role;
    this.isOpenChangeRoleDialog = true;
  }

  public handleHide(): void {
    this.isOpenChangeRoleDialog = false;
  }

}
