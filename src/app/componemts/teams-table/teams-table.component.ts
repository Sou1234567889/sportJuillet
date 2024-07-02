import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teamsTab: any = [];

  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit(): void {
    this.teamService.getAllTeam().subscribe(
      (data) => {
        console.log("here data from BE", data.teams);
        this.teamsTab = data.teams;
      }
    );
  }

  goToInfoTeam(id: Number): void {
    this.router.navigate([`teamInfo/${id}`]);
  }

  editTeam(id: any): void {
    this.router.navigate([`editTeam/${id}`]);
  }

  deleteTeam(id: Number): void {
    this.teamService.deleteTeamById(id).subscribe(
      (response) => {
        console.log("Team deleted", response.isDeleteTeam);
        if (response.isDeleteTeam) {
          this.teamService.getAllTeam().subscribe((data) => {
            this.teamsTab = data.teams;
          });
        }
      } );
  }
}




