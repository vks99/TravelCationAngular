import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm?: FormGroup;
  errorMessage?: string;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      user_name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required)
    });
  }

  onChange(event: any) {
    const name = event.target.name;
    const value = event.target.value;
    this.signupForm?.get(name)?.setValue(value);
  }

  onSubmit() {
    const { user_name, password, name, email, phone, address } = this.signupForm?.value;

    const data = {
      name: name,
      email: email,
      password: password,
	  address:address,
	  phone:phone,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    this.http.post<any>('http://localhost:8000/register', data, config)
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/Destination']);
        },
        error => {
          this.errorMessage = error.message;
        }
      );
  }

  get user_name() { return this.signupForm?.get('user_name'); }
  get password() { return this.signupForm?.get('password'); }
  get name() { return this.signupForm?.get('name'); }
  get email() { return this.signupForm?.get('email'); }
  get phone() { return this.signupForm?.get('phone'); }
  get address() { return this.signupForm?.get('address'); }
}