import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Logform, LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logindetails: Logform[] = [];
  isOpen=false;
  constructor(private loginservice:LoginService){}
  closemessage(){
    this.isOpen=false;
  }
  submitlogin(form: NgForm){
    this.logindetails.push({
      email: form.value.email,
      password: form.value.password,
    });
    console.log(this.logindetails);
    form.reset();
    this.loginservice.Login(this.logindetails).subscribe((data)=>{
      if(data==true){
        this.isOpen=true;
      }
      else{
        this.isOpen=false;
      }
    })
  }
}
