import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {
  services = [
    {
      icon: '⚙️',
      title: 'Mechanical Engineering',
      description: 'Expert consultation and design services in mechanical and industrial engineering'
    },
    {
      icon: '🏗️',
      title: 'Civil Engineering',
      description: 'Insightful civil engineering and site design consulting for developers and architects'
    },
    {
      icon: '🚗',
      title: 'Automobile Engineering',
      description: 'Manufacturing of automobile parts and vehicle tracking systems'
    }
  ];

  products = [
    { name: 'Electronic Fare Meter', icon: '📱' },
    { name: 'GPS Tracking', icon: '🗺️' },
    { name: 'Speed Sensors', icon: '📊' },
    { name: 'Solenoid Valve', icon: '🔧' },
    { name: 'Fuel Pump', icon: '⛽' },
    { name: 'Speed Controller', icon: '🎛️' },
    { name: 'Panic Button', icon: '🆘' },
    { name: 'Sanitizer Dispenser', icon: '🧴' }
  ];

  features = [
    { number: '15+', label: 'Years Experience', icon: '⭐' },
    { number: '500+', label: 'Happy Clients', icon: '👥' },
    { number: '100%', label: 'Quality Assured', icon: '✓' },
    { number: '24/7', label: 'Support', icon: '📞' }
  ];
}
