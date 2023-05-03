import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  contactForm: any = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  public visibility: boolean = true;

  onSubmit(): void {
    this.visibility = false;
    setTimeout(() =>
      Object.keys(this.contactForm).forEach(
        (key) => (this.contactForm[key] = '')
      )
    ),5000;
  }
}
