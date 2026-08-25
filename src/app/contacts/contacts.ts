import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
})
export class Contacts {

  copyEmail() {
    const email = 'viprey.pierre@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      console.log('Email copied to clipboard:', email);
    }).catch((error) => {
      console.error('Failed to copy email:', error);
    });
  }

  callMe() {
    const phoneNumber = '+33629764894';
    navigator.clipboard.writeText(phoneNumber).then(() => {
      console.log('Phone number copied to clipboard:', phoneNumber);
    }).catch((error) => {
      console.error('Failed to copy phone number:', error);
    });
  }
}
