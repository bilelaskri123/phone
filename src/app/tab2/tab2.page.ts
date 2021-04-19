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

  contacts: Contact[] = [];
  filterInput = '';
  page_number = 1;
  page_limit = 8;
  constructor(private contactService: ContactService, private callNumber: CallNumber) { }

  ngOnInit() {
    
  }

  filter(event) {
    this.filterInput = event;
  }

  getContacts(isFirstLoad = false, event) {
    let params = `/search?filterInput=${this.filterInput}&page=${this.page_number}&limit=${this.page_limit}`;
    this.contactService.getContacts(params).subscribe(contactData => {
      console.log(contactData.contacts);
      this.contacts = contactData.contacts;

      if(contactData.contacts.length > 0 && this.page_number * this.page_limit > contactData.count ) {
        event.target.disabled = true;
      }

      if (isFirstLoad)
          event.target.complete();

      this.page_number++;
    });
  }

  callNow(num: string) {
    this.callNumber.callNumber(num, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  doInfinite(event) {
    this.getContacts(true, event);
  }

}
