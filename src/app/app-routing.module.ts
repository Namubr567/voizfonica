import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PlansComponent } from './plans/plans.component';
import { SignupComponent } from './signup/signup.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { PrepaidplansComponent } from './prepaidplans/prepaidplans.component';
import { PaymentComponent } from './payment/payment.component';
import { PostpaidplansComponent } from './postpaidplans/postpaidplans.component';
import { DongleplansComponent } from './dongleplans/dongleplans.component';

const routes: Routes = [
  {path:'custform',component:CustomerformComponent},
  {path:'',component:CarouselComponent},
  {path:'aboutus',component:AboutusComponent},
 {path:'backtohome',component:CarouselComponent},
  {path:'plans',component:PlansComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userlogin',component:UserloginComponent},
 {path:'signup',component:SignupComponent},
 {path:'useraccount',component:UseraccountComponent},
  {path:'userlogin/:pid/view',component:ViewComponent},
  {path:'userlogin/:pid/update',component:UpdateComponent},
  {path:'login',component:IndexComponent},
  {path:'login/signuppage',component:SignupComponent},
  {path:'plans/prepaidplans',component:PrepaidplansComponent},
  {path:'plans/prepaidplans/chosen',component:PaymentComponent},
  {path:'plans/postpaidplans',component:PostpaidplansComponent},
  {path:'plans/postpaidplans/chosen',component:PaymentComponent},
  {path:'plans/dongleplans',component:DongleplansComponent},
  {path:'plans/dongleplans/chosen',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
