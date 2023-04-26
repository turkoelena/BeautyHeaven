import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  constructor() {}

    contactForm: any = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      topic: '',
      message: ''
    }

    printForm() {
      console.log(this.contactForm);
    }

    onSubmit(): void {
      console.warn('Ваш запрос отправлен');
      this.contactForm.reset();
    }
}
