import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lawyer-detail',
  standalone: false,
  templateUrl: './lawyer-detail.component.html',
  styleUrls: ['./lawyer-detail.component.scss']
})
export class LawyerDetailComponent implements OnInit {
  lawyerId: number = 0;
  name = '';
  bio = '';

  ngOnInit() {
    this.lawyerId = Number(this.route.snapshot.paramMap.get('id'));
    const bios: any = {
      1: { name: 'Jane Doe', bio: 'Experienced in civil litigation and family law.' },
      2: { name: 'John Smith', bio: 'Specializes in real estate and business contracts.' },
      3: { name: 'Amira Patel', bio: 'Focuses on immigration and human rights law.' }
    };
    const profile = bios[this.lawyerId];
    if (profile) {
      this.name = profile.name;
      this.bio = profile.bio;
    }
  }

  constructor(private route: ActivatedRoute) {}

}
