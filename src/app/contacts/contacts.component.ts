import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  public messageSubmit: string = '';
  public messageStatus: boolean = false;

  contactForm: any = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  public visibility: boolean = false;

  onSubmit(): void {
    if (
      !this.contactForm.name ||
      !this.contactForm.email ||
      !this.contactForm.phone
    ) {
      this.messageSubmit = 'Поля формы заполнены некорректно!';
      this.visibility = true;
      this.messageStatus = false;
    } else {
      this.messageStatus = true;
      this.visibility = true;
      this.messageSubmit = 'Ваше сообщение успешно отправлено!';
      Object.keys(this.contactForm).forEach(
        (key) => (this.contactForm[key] = '')
      );
    }
  }
}
