import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IPayment {
  firstname: string,
    lastname: string,
    country:string,
    city: string,
    zipcode: string,
    email: string,
    phone: string,
    cardname: string,
    cardnumber: number,
    monthYear: string,
    cvv: number,
    destinationName:string,
    destinationPrice:number
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  url: string = 'http://localhost:8000/Payment';
  constructor(private http: HttpClient) {}

  postPayment(data:IPayment[]): Observable<any> {
    return this.http.post<IPayment[]>(this.url,data);
  }

  
}
