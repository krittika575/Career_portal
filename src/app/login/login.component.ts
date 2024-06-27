import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const loginData = { email: this.email, password: this.password };
    this.http.post('http://localhost:3000/api/login', loginData).subscribe({
      next: (response: any) => {
        console.log(response);
        // Handle successful login, e.g., store token, navigate to dashboard
        this.router.navigate(['/home']);
        alert('Login successful');
      },
      error: (error) => {
        console.error(error);
        // Handle login error
        alert('Login failed. Please check your credentials.');
      }
    });
  }
}
