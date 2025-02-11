import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(private router: Router) {}
  onLoginClick() {
    console.log('Login button clicked!');

    this.router.navigate(['/login']);
  }
}
