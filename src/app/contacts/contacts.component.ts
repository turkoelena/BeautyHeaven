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
    Object.keys(this.contactForm).forEach(
      (key) => (this.contactForm[key] = '')
    );
    const successMessage: any = document.querySelector('.alert-success');
    successMessage.style.display = 'block';    
  }
}
