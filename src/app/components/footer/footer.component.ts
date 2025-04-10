import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  showPrivacyModal = false;
  showTermsModal = false;


openPrivacyModal() {
  console.log('Opening privacy modal');
  this.showPrivacyModal = true;
}

openTermsModal() {
  console.log('Opening privacy modal');
  this.showTermsModal = true;
}

closeModals() {
  this.showPrivacyModal = false;
  this.showTermsModal = false;
}

}
