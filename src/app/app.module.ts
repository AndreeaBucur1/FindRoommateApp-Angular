import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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


import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';


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
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
