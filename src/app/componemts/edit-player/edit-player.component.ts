import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playerEditForm!: FormGroup;
  playerEdit: any = {};
  id: any;
  constructor(private playerService: PlayerService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.playerService.getPlayerById(this.id).subscribe(
      (data) => {
        this.playerEdit = data.player
      }
    )
  }

  editPlayer() {
    console.log('here player object', this.playerEdit);
    this.playerService.editPlayer(this.playerEdit).subscribe(
      (data) => {
        console.log('here response from BE', data.isEditPlayer);
        this.router.navigate(['admin']);
      }
    );
  }

}
