import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  
  // formData: any = {};
  // successMessage: string = "";
  // isOpen: boolean = false;

  // constructor(private http: HttpClient) { }

  // onSubmit(form: NgForm) {
  //   this.http.post('http://localhost:8000/contactus', this.formData).subscribe((response: any) => {
  //       if (response === true) {
  //         this.successMessage = "Form submitted successfully!";
  //         this.isOpen = true;
  //       }
  //       else {
  //         this.successMessage = "Form Submission Failed: Invalid data entered. Please check the information you have entered and try again.";
  //         this.isOpen = true;
  //       }
  //       console.log(response);
  //     }, (error: any) => {
  //       console.error(error);
  //     });
  // }

}
