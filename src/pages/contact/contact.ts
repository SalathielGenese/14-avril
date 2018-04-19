import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    private localNotifications: LocalNotifications,
    public navCtrl: NavController,
    private contacts: Contacts,
  ) {

  }

  public saveDevelopperContact()
  {
    console.log('.....');
    
    let contact: Contact = this.contacts.create();
    contact.name = new ContactName(null, 'YIMGA YIMGA', 'Salathiel Genèse');
    contact.emails = [
      new ContactField('email', 'salathielgenese@gmail.com'),
    ];
    contact.phoneNumbers = [
      new ContactField('mobile', '00237 682 95 77 97', true),
    ];
    contact.organizations = [
      {name: 'Squall.IO', title: 'CEO'},
      {name: 'Leaders\' Printing House', title: 'Manager'},
      {name: 'Station Infini Web inc.', title: 'Dual-end Developper'},
    ];

    contact.save().then(() =>
    {
      this.localNotifications.schedule({
        trigger: {at: new Date(new Date().getTime() + 500)},
        text: '@SalathielGenese added to contacts',
        led: 'FF0000',
        sound: null
      });
    }, () =>
    {
      this.localNotifications.schedule({
        text: 'Error : cannot add @SalathielGenese to contacts',
        trigger: {at: new Date(new Date().getTime() + 500)},
        led: 'FF0000',
        sound: null
      });
    });
  }
}
