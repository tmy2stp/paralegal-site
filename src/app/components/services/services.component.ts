import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    { title: 'End of Tenancy', copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu turpis nec justo. Donec sit amet risus id nulla mattis.' },
    { title: 'Landlord Renovation', copy: 'Curabitur malesuada ante sit amet eros iaculis, at facilisis orci egestas. Vestibulum ante ipsum primis in faucibus orci.' },
    { title: 'Tenant Damages', copy: 'Nullam ac erat a neque egestas tempus. Quisque vitae nulla vitae ligula aliquet blandit.' },
    { title: 'Unpaid Tenant Bills', copy: 'Sed vitae quam eu sem viverra ullamcorper. Duis id sapien eget libero sodales pretium.' },
    { title: 'Illegal Activity', copy: 'Suspendisse nec dolor nec est fermentum suscipit. Donec lobortis ex at dolor luctus, in bibendum quam blandit.' },
    { title: 'Tenant Eviction', copy: 'Aenean id felis sed erat fermentum laoreet. Aliquam erat volutpat. Mauris a arcu velit.' },
    { title: 'Landlord Legal', copy: 'Fusce faucibus eros non metus convallis luctus. Etiam rutrum ipsum at velit suscipit, sed vestibulum sapien interdum.' },
    { title: 'Tenant Legal Aid', copy: 'Ut vitae eros nec diam vulputate facilisis. Integer in dictum purus. Aliquam erat volutpat.' }
  ];

}
