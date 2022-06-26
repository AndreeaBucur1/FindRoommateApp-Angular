import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ActivateAccountComponent } from './authentication/register/activate-account/activate-account.component';
import { AfterRegistrationComponent } from './authentication/register/after-registration/after-registration.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { FindRoommateFormComponent } from './roommate-posts/find-roommate-form/find-roommate-form.component';
import { PropertyDetailsComponent } from './property-posts/property-details/property-details.component';
import { PropertyPostsComponent } from './property-posts/property-posts.component';
import { UsersPropertiesComponent } from './property-posts/users-properties/users-properties.component';
import { RoommatePostsComponent } from './roommate-posts/roommate-posts.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { RoommatePostDetailsComponent } from './roommate-posts/roommate-post-details/roommate-post-details.component';
import { HomeComponent } from './home/home.component';
 
const routes: Routes = [
  {
    path:'',
    component: HomeComponent
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
  },
  {
    path: 'my-properties',
    component: UsersPropertiesComponent
  },
  {
    path: 'find-roommate',
    component: RoommatePostsComponent
  },
  {
    path: 'roommate-post-details/:username',
    component: RoommatePostDetailsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
