import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isSticky = false;


  toggleSidenav() {
    this.sidenav.toggle();
  }

  @HostListener('window:scroll', [])
  onScroll(): void  {
    this.isSticky = window.scrollY > 60;
  }

}


