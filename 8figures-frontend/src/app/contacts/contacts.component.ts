import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact: any;
  error!: string;
  constructor(private service: ContactService) { }
  ngOnInit() {
    this.getContactList();

  }

  getContactList() {
    this.service.getAllContact().subscribe(response => {
      console.log(response);
      this.contact = response;
    });


  }

  deleteContact(id: any) {
    this.service.deleteContact(+id).subscribe(response => {
      console.log(response);
      if (response) {
        this.getContactList();
      }
      else {
        this.error = "Contact deletion failed";
      }
    })
  }

}
