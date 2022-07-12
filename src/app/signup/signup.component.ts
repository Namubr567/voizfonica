import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newuser={
    firstname:'',
    lastname:'',
    email:'',
    phno:'',
    password:'',
    confirmpassword:''
  }

  constructor() { }

  ngOnInit(): void {
  }
public signup(){
  alert('User created')
  console.log(this.newuser);
}
}
