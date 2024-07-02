import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playersTab: any = [
    // { id: 1, Name: 'saleh', Age: 20, nbr: 12, position: "lefet" },
    // { id: 2, Name: 'Farouk', Age: 20, nbr: 12, position: "......" },
    // { id: 3, Name: 'Yassine', Age: 20, nbr: 12, position: "lefet" },
    // { id: 4, Name: 'Hama', Age: 20, nbr: 12, position: "/////" },
  ]
  constructor(private plService:PlayerService) { }

  ngOnInit(): void {
    this.plService.getAllPlayer().subscribe(
      (data)=>{console.log('here reponse de plyer from BE',data.players);
        this.playersTab=data.players;
      }
    )
  }

}
