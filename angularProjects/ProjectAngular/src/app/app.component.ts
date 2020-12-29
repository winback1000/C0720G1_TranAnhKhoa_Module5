import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  title = 'ProjectAngular';

  isCardNameRoute() {
    return this.router.url.includes("/name-card");
  }

  isProgressBarRoute() {
    return this.router.url.includes("/progress-bar");
  }
}
