import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Logform {
    email: string,
    password: string
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'http://localhost:8000/login';
  constructor(private http: HttpClient) {}

  Login(data:Logform[]): Observable<any> {
    return this.http.post<Logform[]>(this.url,data);
  }

  
}
