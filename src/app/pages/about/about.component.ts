import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  coreValues = [
    {
      title: 'Quality Assurance',
      description: 'Features that meet consumer needs and give customer satisfaction. Start with quality, destination will be excellence.',
      icon: '✓'
    },
    {
      title: 'Integrity',
      description: 'Our Code of Business Conduct sets out our minimum expectations for all colleagues worldwide.',
      icon: '🤝'
    },
    {
      title: '24/7 Support',
      description: 'Most challenging of all is sheer customer expectation. We are here 24/7 to help.',
      icon: '📞'
    }
  ];

  goals = [
    'Become an organization as progressive as the industry we serve',
    'Increase market share by becoming preferred vendor for design, development, and manufacturing',
    'Become leading R&D centre for automobile components',
    'Expand globally while maintaining quality standards'
  ];

  timeline = [
    { year: '2009', event: 'Foundation', description: 'Unimax Technologies established as partnership organization' },
    { year: '2012', event: 'Expansion', description: 'Expanded product and service offerings' },
    { year: '2015', event: 'ISO Certified', description: 'Achieved ISO certification for manufacturing' },
    { year: '2020', event: 'Global Reach', description: 'Extended operations to international markets' }
  ];
}
