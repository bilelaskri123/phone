import {Component, OnInit} from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Contacts } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  contactList = [];
  constructor( private callNumber: CallNumber, public contacts: Contacts) {}

  ngOnInit() {
    this.contacts.find(['*']).then(contactDat => {
      this.contactList = contactDat;
    }).catch(error => {
      console.log(error.message);
    });
  }

  callNow(num: string) {
    this.callNumber.callNumber(num, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
