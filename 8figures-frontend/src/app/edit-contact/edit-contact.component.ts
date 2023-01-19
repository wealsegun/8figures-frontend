import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor(private service: ContactService) {

  }
  ngOnInit() {

  }

  updateContactDetails(id: any) {
    console.log(id);
  }

}
