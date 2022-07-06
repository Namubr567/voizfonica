import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user={
    firstname:'',
    lastname:'',
    email:''
  }
  constructor() { }

  ngOnInit(): void {
  }
  public register(){
    alert('you have submit the form')
    console.log(this.user);
}
  }


 
  
