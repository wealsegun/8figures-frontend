import { AccountService } from './services/account.service';
import { CurrentUserService } from './services/current-user.service';
import { ContactService } from './services/contact.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactsComponent,
    CreateContactComponent,
    EditContactComponent,
    NavMenuComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule
    // RouterTestingModule
    // FormsModule,
  ],
  providers: [ ContactService, CurrentUserService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
