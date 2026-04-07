import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'GPS Tracking System',
      icon: '🗺️',
      category: 'Vehicle Tracking',
      description: 'Advanced GPS-based vehicle tracking with real-time monitoring and fleet management capabilities.'
    },
    {
      name: 'Electronic Auto Fare Meter',
      icon: '📱',
      category: 'Automation',
      description: 'Reliable electronic fare meter for commercial vehicles with digital display and accuracy.'
    },
    {
      name: 'Solenoid Valve',
      icon: '🔧',
      category: 'Components',
      description: 'High-quality solenoid valves for various industrial and automotive applications.'
    },
    {
      name: 'Car Fuel Pump',
      icon: '⛽',
      category: 'Automotive',
      description: 'Durable fuel pump systems designed for reliable vehicle performance.'
    },
    {
      name: 'Auto Hall Effect Speed Sensor',
      icon: '📊',
      category: 'Sensors',
      description: 'Precision speed sensors with Hall effect technology for accurate vehicle speed measurement.'
    },
    {
      name: 'Gearbox Speed Sensor',
      icon: '⚙️',
      category: 'Sensors',
      description: 'Specialized sensors for gearbox speed detection in automatic transmission systems.'
    },
    {
      name: 'Speed Limiter Device',
      icon: '🎛️',
      category: 'Control',
      description: 'Advanced speed limiting device for fleet safety and compliance.'
    },
    {
      name: 'Alarm Buzzer',
      icon: '🔔',
      category: 'Safety',
      description: 'High-performance alarm buzzers for security and warning systems.'
    },
    {
      name: 'GPS Panic Button',
      icon: '🆘',
      category: 'Safety',
      description: 'Emergency alert system with GPS location tracking for immediate assistance.'
    },
    {
      name: 'Electronic Automatic Sanitizer',
      icon: '🧴',
      category: 'Hygiene',
      description: 'Touch-free automatic sanitizer dispenser with reliable activation mechanism.'
    }
  ];

  categories = ['All', 'Vehicle Tracking', 'Automation', 'Sensors', 'Safety', 'Components', 'Control', 'Automotive', 'Hygiene'];
  selectedCategory = 'All';

  getFilteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
