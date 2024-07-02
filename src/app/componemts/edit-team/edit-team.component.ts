import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  teamEditForm!: FormGroup;
  teamEdit: any = {};
  id: any;

  constructor(
    private teamService: TeamService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.teamService.getTeamById(this.id).subscribe(
      (data) => {
        this.teamEdit = data.team;
      }
    );
  }

  editTeam(): void {
    console.log('Here team object', this.teamEdit);
    this.teamService.editTeam(this.teamEdit).subscribe(
      (data) => {
        console.log('Here response from BE', data.isEditTeam);
        this.router.navigate(['admin']);
      });
  }
}







