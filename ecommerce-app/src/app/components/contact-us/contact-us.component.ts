import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contact = { name: '', email: '', message: '' };

  onSubmit(): void { 
    if (this.contact.name && this.contact.email && this.contact.message) { 
      console.log('Contact form submitted', this.contact); // You can also send this data to a server or an email service. 
      alert('Thank you for your message! We will get back to you soon.'); 
      this.contact = { 
        name: '', email: '', message: '' 
      }; 
    }
  }
}
