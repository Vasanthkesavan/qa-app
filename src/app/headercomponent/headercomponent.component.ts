import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    return this.authService.logout();
  }
}
