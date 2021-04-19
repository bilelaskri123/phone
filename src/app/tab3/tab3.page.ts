import { Component, OnInit } from '@angular/core';
import { CallLog, CallLogObject } from '@ionic-native/call-log/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Contacts } from '@ionic-native/contacts/ngx';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  myContacts = [];
  filters: CallLogObject[] = [
    {
       name: 'date',
       value: '2592000',
       operator: ">="
    }];
  constructor(private callLog: CallLog, private callNumber: CallNumber, private contactService: ContactService ) {}

  ngOnInit() {
    this.callLog.getCallLog(this.filters).then(data => {
      // for(let i=0; i< data.length; i++) {
      //   if(data[i].name == '') {

      //   }
      // }
      this.myContacts = data;
      
    }).catch(error => {
      console.log(error);
    });
  }

  callNow(num: string) {
    this.callNumber.callNumber(num, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
