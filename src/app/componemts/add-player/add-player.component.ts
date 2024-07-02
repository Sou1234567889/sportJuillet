import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  playerForm!:FormGroup;
  player:any={};

  constructor(
    private playerService:PlayerService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }


  addPlayer(){
    console.log('here player object',this.player);
    this.playerService.addPlayer(this.player).subscribe(
      (data)=>{
        console.log('here data from BE',data.isAddPlayer);
        this.router.navigate(['Admin']); 
      }
    );
  }


}
