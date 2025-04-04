import { Component, ViewChild, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSticky: boolean = false;

  ngOnInit(): void {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  ngAfterViewInit(): void {
    console.log('sidenav initialized:', this.sidenav);
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll(): void {
  //   const scrollY = window.scrollY || document.documentElement.scrollTop;
  //   console.log('ScrollY:', scrollY); // 👈 This should now log correctly
  //   this.isSticky = scrollY > 80;
  // }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = (): void => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isSticky = scrollY > 30;
  };

  toggleSidenav(): void {
    console.log('Toggle fired:', this.sidenav);
    if (this.sidenav) {
      this.sidenav.toggle();
    } else {
      console.warn('Sidenav is not available');
    }
  }
}


