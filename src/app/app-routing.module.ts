import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ActivateAccountComponent } from './authentication/register/activate-account/activate-account.component';
import { AfterRegistrationComponent } from './authentication/register/after-registration/after-registration.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { PropertyDetailsComponent } from './property-posts/property-details/property-details.component';
import { PropertyPostsComponent } from './property-posts/property-posts.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersManagementComponent } from './users-management/users-management.component';
 
const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'users',
    component: UsersManagementComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'successfully-registered',
    component: AfterRegistrationComponent
  },
  {
    path: 'activate-account/:token',
    component: ActivateAccountComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'reset-password/:token',
    component: ResetPasswordComponent
  },
  {
    path: 'rent',
    component: PropertyPostsComponent,
  },
  {
    path: 'sale',
    component: PropertyPostsComponent
  },
  {
    path: 'post/:id',
    component: PropertyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
