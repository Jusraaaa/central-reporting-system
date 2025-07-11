import { Component } from '@angular/core';
import { ClientNavbarComponent } from '../../../components/navbar/client-navbar/client-navbar.component';


@Component({
  selector: 'app-client',
  standalone: true,
  imports: [ClientNavbarComponent],
  templateUrl: './client.html',
  styleUrls: ['./client.scss']
})
export class ClientComponent {

}
