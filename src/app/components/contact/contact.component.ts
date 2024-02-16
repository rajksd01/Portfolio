import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../interfaces/contact-interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  public contact: Contact = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };
  public data: Contact = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };
  handleFormSubmit(): void {
    this.contact = this.data;
  }
}
