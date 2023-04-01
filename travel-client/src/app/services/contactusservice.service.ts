import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IContactus {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactusserviceService {
  url: string = 'http://localhost:8000/contactus';
  constructor(private http: HttpClient) {}

  postContactus(data:IContactus[]): Observable<any> {
    return this.http.post<IContactus[]>(this.url,data);
  }
}
