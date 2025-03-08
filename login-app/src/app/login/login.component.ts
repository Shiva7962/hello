import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'user' && this.password === 'password') {
      this.router.navigate(['/hello-world']);
    } else {
      this.message = 'Incorrect details';
    }
  }
}