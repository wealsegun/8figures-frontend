import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactModel } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  createContactFormGroup: FormGroup;
  contact!: ContactModel;
  constructor(private service: ContactService, private fb: FormBuilder, private router: Router) {

    this.createContactFormGroup = fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    })

  }
  ngOnInit() {

  }

  get name() {
    return this.createContactFormGroup.get('name');
  }

  get phoneNumber() {
    return this.createContactFormGroup.get('phoneNumber');
  }

  createContact() {
    const _contact: ContactModel = {
      id: 0,
      name: this.name?.value,
      phoneNumber: this.phoneNumber?.value
    };
    console.log(_contact);

    this.service.createContact(_contact).subscribe(response => {
      console.log(response);
      if (response > 0) {
        this.router.navigate(['/contact']);
      }
    })
  }

}
