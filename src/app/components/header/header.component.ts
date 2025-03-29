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
  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.isSticky = window.scrollY > 80;
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }




}


