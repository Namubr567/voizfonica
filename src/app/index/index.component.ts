import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
posts:Post[]=[];
  constructor(public servicesService:ServicesService) { }

  ngOnInit(): void {
    this.servicesService.getAll().subscribe((data:Post[])=>{
      this.posts=data;
    })
  }
  deleteDetails(id:number){
    this.servicesService.deleteDetails(id).subscribe(res=>{
      this.posts=this.posts.filter(post=>post.id!==id);
    })
  }

}
