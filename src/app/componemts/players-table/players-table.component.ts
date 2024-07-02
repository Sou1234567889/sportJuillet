import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  playersTab:any=[
    // {id:1,Name:'Saleh',Age:28,nbr:10,position:'left'},
    // {id:2,Name:'Ibrahim',Age:20,nbr:10,position:'...'},
    // {id:3,Name:'Youssef',Age:44,nbr:10,position:'...'},
    // {id:4,Name:'Ahmed',Age:33,nbr:10,position:'...'},
    // {id:5,Name:'Yassine',Age:20,nbr:10,position:'//'},
    // {id:6,Name:'Mejri',Age:29,nbr:10,position:'////'},
  ]
  constructor(private router:Router,private plyService:PlayerService) { }

  ngOnInit(): void {
    this.plyService.getAllPlayer().subscribe(
      (data) => {
        console.log("here data from BE", data.players);
        this.playersTab = data.players;
      }
    );
  }
  goToDisplay(id:Number){
    this.router.navigate([`playersInfo/${id}`])
  }

  editPlayer(id:any){
    this.router.navigate([`editPlayer/${id}`])
  }

  deletePlayer(id:any){
     this.plyService.deletePlayerById(id).subscribe(
      (response) => {
        console.log("Team deleted", response.isDeletedPlayer);
        if (response.isDeletedPlayer) {
          this.plyService.getAllPlayer().subscribe((data) => {
            this.playersTab = data.players;
          });
        }
      });
     
  }
}
