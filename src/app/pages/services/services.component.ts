import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      icon: '🔌',
      title: 'PCB Design',
      description: 'Professional PCB design services with fine finish, reliability and consistent performance for various industrial applications.',
      features: ['Custom layouts', 'Multi-layer designs', 'Quality testing', 'Fast turnaround']
    },
    {
      icon: '⚡',
      title: 'PCB Assembling',
      description: 'Expert PCB assembly with various specifications, ranges and dimensions as per exact customer demands.',
      features: ['Component sourcing', 'Quality assurance', 'Testing & validation', 'ISO certified']
    },
    {
      icon: '🗺️',
      title: 'Vehicle Tracking System',
      description: 'Advanced GPS-based vehicle tracking solutions with real-time monitoring and innovative approaches for fleet management.',
      features: ['Real-time tracking', 'Route optimization', 'Fleet analytics', '24/7 support']
    },
    {
      icon: '🆘',
      title: 'Panic Button Solution',
      description: 'Comprehensive security solutions with easy programming features for all types of installations and emergency situations.',
      features: ['Easy activation', 'Quick response', 'Reliable alerts', 'Multiple contacts']
    },
    {
      icon: '⚙️',
      title: 'Mechanical Engineering',
      description: 'Comprehensive mechanical engineering services covering design, manufacturing, testing and analysis of mechanical systems.',
      features: ['Design consultation', 'CAD modeling', 'Prototype development', 'Testing services']
    },
    {
      icon: '🔧',
      title: 'Engineering Consultation',
      description: 'Expert consultation across automotive, construction, and industrial sectors with timely solutions to technical challenges.',
      features: ['Expert advisors', 'Cost optimization', 'Timeline delivery', 'Quality assurance']
    }
  ];

  clients = [
    '🏢', '🏭', '🏗️', '🚗', '🚙', '🚕', '🛻', '📦'
  ];
}
