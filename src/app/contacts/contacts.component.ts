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

  onSubmit(): void {
    const successMessage: any = document.querySelector('.alert-success');
    successMessage.style.display = 'block';

    setTimeout(() =>
      Object.keys(this.contactForm).forEach(
        (key) => (this.contactForm[key] = '')
      )
    ),5000;    
  }
}
