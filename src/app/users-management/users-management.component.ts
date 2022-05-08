import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/user.entity';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {

  public users: User[] = [];

  public columns: any[] = [];

  public roles: string[] = ["user", "admin"];

  public isOpenChangeRoleDialog: boolean = false;

  public userToEdit: {id: number, role: string} = {id: 0 , role: ""};
  
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
      { fileId: 'role', header: 'role' },
      { field: 'actions', header: 'Actions' },
    ]
  }

  public getUsers(): void {
    this.userService.getUsers()
      .subscribe(
        (users: User[]) => {
          this.users = users;
          console.log(this.users);

        }
      )
  }

  public deleteById(id: number): void {
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
    console.log(this.userToEdit);
    
  }

  public openChangeRoleDialog(id: number, role: string): void {
    this.role = role;
    this.userToEdit.id = id;
    this.userToEdit.role = role;
    console.log(role);
    console.log(this.userToEdit);
    
    this.isOpenChangeRoleDialog = true;
  }

  public handleHide(): void {
    this.isOpenChangeRoleDialog = false;
  }

}
