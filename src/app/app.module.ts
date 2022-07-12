import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PlansComponent } from './plans/plans.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
import { PaymentComponent } from './payment/payment.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
import { DongleplansComponent } from './dongleplans/dongleplans.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CustomerformComponent,
    AboutusComponent,
    PlansComponent,
    AdminloginComponent,
    UserloginComponent,
    SignupComponent,
    IndexComponent,
    ViewComponent,
    UpdateComponent,
    UseraccountComponent,
    PrepaidplansComponent,
    PaymentComponent,
    PostpaidplansComponent,
    DongleplansComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
   FormsModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
