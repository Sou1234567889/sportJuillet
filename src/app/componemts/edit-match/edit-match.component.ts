import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  matchEditForm!:FormGroup;
  constructor(private matchSeervice:MatchService,private activateRoute:ActivatedRoute,private router:Router) { }
  matchEdit:any={};
  id:any;

  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.params['id'];
    this.matchSeervice.getMatchById(this.id).subscribe(
      (data)=>{
        this.matchEdit=data.match
      }
    )
  }
  editMatch(){
    
    console.log('here match object',this.matchEdit);
    this.matchSeervice.editMatch(this.matchEdit).subscribe(
      (data)=>{
        console.log('here response from BE',data.isEditMatch);
        this.router.navigate(['admin']);
        
      }
    )
  }
}
