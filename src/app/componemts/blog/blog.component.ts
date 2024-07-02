import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogTab:any=[
    {description:'.....',title:'///',date:1212,img:"assets/images/img_1.jpg"},
    {description:'.....',title:'///',date:1999,img:"assets/images/img_2.jpg"},
    {description:'.....',title:'///',date:1299,img:"assets/images/img_3.jpg"},
    {description:'.....',title:'///',date:1313,img:"assets/images/img_1.jpg"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
