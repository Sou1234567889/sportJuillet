import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  matchForm!:FormGroup;

  match:any={};
  constructor(private mSeervice:MatchService,private router:Router) { }

  ngOnInit(): void {
  }

  addMatch(){
    
    console.log('here match object',this.match);
    this.mSeervice.addMatch(this.match).subscribe(
      (data)=>{
        console.log('here data from BE',data.isAddMatch);
        this.router.navigate(['admin']);
        
      }
    );
  }

}
