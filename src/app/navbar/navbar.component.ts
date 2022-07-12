import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
msg:string='';
  constructor() { }

  ngOnInit(): void {
  }
public youClickedMe(msg:string):void{
  this.msg=msg;
}
}
