import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: ['+91-84383 77771', '+91-84384 77771']
    },
    {
      icon: '📧',
      title: 'Email',
      details: ['unimax_2@yahoo.com']
    },
    {
      icon: '📍',
      title: 'Address',
      details: ['292/221B, Saranga Nagar', 'Samichettipalayam Road', 'Jothipuram (PO)', 'Coimbatore - 641047, India']
    }
  ];

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}
