import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  @ViewChild('progressBar', { static: false }) progressBar!: ElementRef;
  defaultImage = '/assets/placeholder.jpg';

  services = [
    {
      title: 'Landlord and Tenant Disputes',
      copy: 'Expert representation for both landlords and tenants navigating the complexities of Ontario housing law.',
      image: '/assets/landlord-tenant.jpg'
    },
    {
      title: 'N12 Notice',
      copy: 'Proper service and defense of N12 Notices related to landlord personal use or purchaser occupancy.',
      image: '/assets/n12.jpg'
    },
    {
      title: 'End of Tenancy',
      copy: 'Guidance through lease termination processes with compliance to provincial regulations.',
      image: '/assets/end-tenancy.jpg'
    },
    {
      title: 'Landlord Renovation',
      copy: 'Support with legal notices and procedures when planning renovations that impact tenancy.',
      image: '/assets/renovation.jpg'
    },
    {
      title: 'Tenant Damages',
      copy: 'Claims, documentation, and hearings regarding property damage caused by tenants.',
      image: '/assets/tenant-damage.jpg'
    },
    {
      title: 'Unpaid Tenant Bills',
      copy: 'Recovery of unpaid rent and utility costs through legal filings and tribunal appearances.',
      image: '/assets/unpaid-bills.jpg'
    },
    {
      title: 'Illegal Activity',
      copy: 'Immediate legal action and representation in cases involving illegal activity in rental units.',
      image: '/assets/illegal-activity.jpg'
    },
    {
      title: 'Tenant Eviction',
      copy: 'From notice to hearing to enforcement, we manage eviction processes professionally and lawfully.',
      image: '/assets/eviction.jpg'
    },
    {
      title: 'Landlord Legal',
      copy: 'Comprehensive legal support for landlords, from lease drafting to tribunal advocacy.',
      image: '/assets/landlord-legal.jpg'
    },
    {
      title: 'Tenant Legal Aid',
      copy: 'Affordable, accessible legal services for tenants facing disputes or eviction notices.',
      image: '/assets/tenant-aid.jpg'
    },
    {
      title: 'Emergency Notary',
      copy: 'Fast, mobile notary services for urgent legal documentation across the GTA.',
      image: '/assets/notary.jpg'
    }
  ];

  scroll(direction: 'left' | 'right') {
    const container = this.scrollContainer.nativeElement;
    const amount = 260; // same as card width + gap
    container.scrollBy({ left: direction === 'right' ? amount : -amount, behavior: 'smooth' });
  }

  updateProgressBar() {
    const container = this.scrollContainer.nativeElement;
    const bar = this.progressBar.nativeElement;
  
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const progress = (scrollLeft / scrollWidth) * 100;
  
    bar.style.width = `${progress}%`;
  }
}


