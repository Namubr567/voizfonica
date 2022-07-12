import { Component, OnInit } from '@angular/core';
import { Complains } from '../models/complains';
//import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {
complains:Complains=new Complains();
  constructor() { }

  ngOnInit(): void {
  }
contactus(){
  //alert ('user created')
//   console.log(this.complains);
//   this.servicesService.contactus(this.complains).subscribe(data=>{
//     alert("Complaint Submitted");
//   },error=>alert("Complaint not submitted"));
// }
}
}
