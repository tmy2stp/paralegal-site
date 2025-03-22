import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navItems: string[] = ['Nav1', 'Nav2', 'Nav3', 'Nav4', 'Nav5'];
}


