import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css'],
})
export class FlightsSearchComponent {
  user = this.service.user;

  constructor(private service: AuthLibService) {
    this.service.login('Max  Flights', null);
  }

  search(): void {
    this.service.login('Max  Flights', null);
    console.log('Not implemented for this demo!');
  }

  terms(): void {
    console.log('Not implemented for this demo!');
  }
}
