import { Component, ViewChild, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;
  isSticky: boolean = false;
  isMenuOpen = false;

  ngOnInit(): void {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  ngAfterViewInit(): void {
    console.log('sidenav initialized:', this.sidenav);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = (): void => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isSticky = scrollY > 30;
  };

  toggleSidenav(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.sidenav.toggle();
  }

  closeSidenav(): void {
    this.isMenuOpen = false;
    this.sidenav.close();
  }
}


