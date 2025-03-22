import { Component } from '@angular/core';

@Component({
  selector: 'app-expertise',
  standalone: false,
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent {
    expertise = [
      { icon: 'gavel', label: 'Legal Advice' },
      { icon: 'assignment', label: 'Document Prep' },
      { icon: 'groups', label: 'Family Law' },
      { icon: 'real_estate_agent', label: 'Real Estate' },
      { icon: 'handshake', label: 'Mediation' },
      { icon: 'person_pin', label: 'Representation' }
    ];

}
