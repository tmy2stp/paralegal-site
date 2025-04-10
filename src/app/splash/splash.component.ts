import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  standalone: false,
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.scss'
})
export class SplashComponent implements OnInit  {
  showSplash = true;
  fadeOut = false;

  ngOnInit(): void {
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        this.fadeOut = true;
      }, 2200); 

      setTimeout(() => {
        this.showSplash = false;
      }, 2000);
    } else {
      this.showSplash = false;
    }
  }

}
