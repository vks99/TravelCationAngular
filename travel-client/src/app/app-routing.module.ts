import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import {PaymentComponent} from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'contactus', component: ContactusComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
