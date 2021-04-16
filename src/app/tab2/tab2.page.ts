import {Component, OnInit} from '@angular/core';
import { Contact } from '../shared/models/Contact';
import { ContactService } from '../shared/services/contact.service';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  contacts: Contact[];
  filterInput = '';
  constructor(private contactService: ContactService, private callNumber: CallNumber) { }

  ngOnInit() {
  }

  filter(event) {
    this.filterInput = event;
  }

  getContacts() {
    this.contactService.getContacts(this.filterInput).subscribe(contactData => {
      console.log(contactData.contacts);
      this.contacts = contactData.contacts;
    });
  }

  callNow(num: string) {
    this.callNumber.callNumber(num, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
