import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: 'counter', component: CounterComponent },
  // { path: 'fetch-data', component: FetchDataComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'create-contact', component: CreateContactComponent },
  { path: 'edit-contact/:id', component: EditContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
]
