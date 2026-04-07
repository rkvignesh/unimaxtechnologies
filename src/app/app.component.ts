import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Unimax Technologies';
  isHeaderSticky = false;
  isMobileMenuOpen = false;

  navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' }
  ];

  constructor(private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isHeaderSticky = window.scrollY > 50;
  }

  ngOnInit(): void {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll to top on route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
