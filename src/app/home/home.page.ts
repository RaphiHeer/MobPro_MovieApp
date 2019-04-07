import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public battery: string;

  constructor (
    private router: Router
  ) { }

  navigateToNativePage() {
    this.router.navigate(['native']);
  }
}
