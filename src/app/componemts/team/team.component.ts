import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
@Input() teamObj:any;

  constructor() { }

  ngOnInit(): void {
   
  }
}

