import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-people',
  standalone: false,
  templateUrl: './our-people.component.html',
  styleUrls: ['./our-people.component.scss']
})
export class OurPeopleComponent {
  lawyers = [
    { id: 1, name: 'Jimmy Gangadin ', title: 'Senior Paralegal',  image: 'lawyer1.jpg' },
    { id: 2, name: 'Omar Rambhajan', title: 'B.A., LL.B, LL.M', image: 'lawyer2.jpg' },
    { id: 3, name: 'Sarah Vaz', title: 'Paralegal', image: 'lawyer3.jpg' }
  ];


  constructor(private router: Router) {}

  goToProfile(id: number) {
    this.router.navigate(['/lawyer', id]);
  }


}
