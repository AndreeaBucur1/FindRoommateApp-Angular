import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RegisterComponent } from './authentication/register/register.component';
import { AfterRegistrationComponent } from './authentication/register/after-registration/after-registration.component';
import { ActivateAccountComponent } from './authentication/register/activate-account/activate-account.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UploadProfilePictureComponent } from './user-profile/upload-profile-picture/upload-profile-picture.component';

import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MenubarModule } from 'primeng/menubar';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { MenuComponent } from './menu/menu.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { PropertyPostsComponent } from './property-posts/property-posts.component';
import { PropertyDetailsComponent } from './property-posts/property-details/property-details.component';
import { FilterPropertyPostsPipe } from './shared/pipes/filter-property-posts.pipe';
import { AddPropertyFormComponent } from './property-posts/add-property-form/add-property-form.component';
import { UsersPropertiesComponent } from './property-posts/users-properties/users-properties.component';
import { ContactOwnerFormComponent } from './contact-owner-form/contact-owner-form.component';
import { FindRoommateFormComponent } from './roommate-posts/find-roommate-form/find-roommate-form.component';
import { RoommatePostsComponent } from './roommate-posts/roommate-posts.component';
import { FilterRoommatePostsPipe } from './shared/pipes/filter-roommate-posts.pipe';
import { RoommatePostDetailsComponent } from './roommate-posts/roommate-post-details/roommate-post-details.component';
import { HomeComponent } from './home/home.component';
import { UploadPropertyPhotosComponent } from './property-posts/upload-property-photos/upload-property-photos.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		UsersManagementComponent,
		RegisterComponent,
		AfterRegistrationComponent,
		ActivateAccountComponent,
		UserProfileComponent,
		UploadProfilePictureComponent,
		MenuComponent,
		ResetPasswordComponent,
		PropertyPostsComponent,
		PropertyDetailsComponent,
		FilterPropertyPostsPipe,
		AddPropertyFormComponent,
		UsersPropertiesComponent,
		ContactOwnerFormComponent,
		FindRoommateFormComponent,
		RoommatePostsComponent,
		FilterRoommatePostsPipe,
		RoommatePostDetailsComponent,
		HomeComponent,
  UploadPropertyPhotosComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		TableModule,
		BrowserAnimationsModule,
		ScrollingModule,
		ButtonModule,
		InputTextModule,
		DropdownModule,
		DialogModule,
		FileUploadModule,
		RadioButtonModule,
		MenubarModule,
		MatIconModule,
		DropdownModule,
		InputTextModule,
		CheckboxModule,
		DialogModule,
		RadioButtonModule,
		InputTextareaModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
