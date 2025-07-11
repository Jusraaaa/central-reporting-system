import { Component } from '@angular/core';
import { AdminNavbarComponent } from '../../../components/navbar/admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports:[AdminNavbarComponent],
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss']
})
export class AdminComponent { }