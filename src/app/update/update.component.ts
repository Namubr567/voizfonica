import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
id!:number;
email!:string;
password!:string;
post!:Post;
form!:FormGroup;

  constructor(
    public servicesServices:ServicesService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
    this.id=this.route.snapshot.params['pid'];
    this.servicesServices.readPostById(this.id).subscribe((data:Post)=>{
      this.post=data;
    })
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.servicesServices.update(this.id,this.form.value).subscribe((res:any)=>{
      console.log('details updated succesfully');
      this.router.navigateByUrl("userdetails")
    })
  }
  }

