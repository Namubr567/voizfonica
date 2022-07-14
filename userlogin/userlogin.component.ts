import { Component, OnInit } from '@angular/core';
 import { ServicesService } from '../services/services.service';
 import { Router } from '@angular/router';
import { User } from '../models/user';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  user:User=new User();

  constructor(private servicesService:ServicesService,private router:Router) { }

  ngOnInit(): void {
  }
  userLogin(){
    console.log(this.user);
    this.servicesService.loginUser(this.user).subscribe(data=>{
      this.router.navigate(['useraccount'])
    },error=>alert("sorry please enter correct id and password"));
    }
  }
